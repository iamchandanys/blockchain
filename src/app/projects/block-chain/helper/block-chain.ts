import { Block, Transaction } from "./block";
import { KeyGenerator } from "./key-generator";
import * as elliptic from "elliptic";
import { Guid } from 'guid-typescript';
import { BlockChainDefaultFields, MineStatusEnum } from "./block-chain-enums";
declare var $: any;

export class BlockChain {

    keyGenerator: KeyGenerator;
    keyFromPrivate: elliptic.ec.KeyPair;
    pendingTransactions: Transaction[];
    chain: Block[] = [];
    DefautAddress: string; // System Address.
    miningReward: number = 100; // Amount that the system needs to give to the miners.
    miningMessage: string = ""; // Holds the mining logs.

    constructor() {

        this.keyGenerator = new KeyGenerator();
        this.keyFromPrivate = this.keyGenerator.keyFromPrivate;
        this.pendingTransactions = [];
        this.DefautAddress = BlockChainDefaultFields.defaultSystemAddressCode + Guid.create();

    }

    // Basically the first block of the block chain.
    createGenesisBlock(fromAddress: string, toAddress: string, amount: number): Block {

        const transaction = new Transaction(Guid.create().toString(), fromAddress, toAddress, amount, 'Genesis Block', MineStatusEnum.Success, Date.now(), true);
        return new Block(Guid.create().toString(), Date.now(), transaction, '0');

    }

    addTransaction(transaction: Transaction) {

        if (!transaction.fromAddress || !transaction.toAddress) {
            throw new Error('Transaction must include From & To address.');
        }

        if (!transaction.amountTransferred || transaction.amountTransferred <= 0) {
            throw new Error('Invalid transaction amount.');
        }

        if (!transaction.isTransactionValid(this.keyGenerator)) {
            throw new Error('Cannot add invalid transaction.');
        }

        this.pendingTransactions.push(transaction);

    }

    getLatestBlock() {

        return this.chain[this.chain.length - 1];

    }

    minePendingTransactions(miningRewardAddress: string, transaction: Transaction, difficultyLevel: number) {

        $("#minedRewardText").text("");
        $("#minedRewardTextNote").text("");

        this.miningMessage += `${Date.now()} - Mining ${transaction.id.substring(0, 4)}***...***${transaction.id.substr(-4)} transaction started...\r\n`;
        this.miningMessage += `${Date.now()} - Difficulty level is set to ${difficultyLevel}.\r\n`;

        let block = new Block(Guid.create().toString(), Date.now(), transaction, this.getLatestBlock().hash);
        const msg = block.mineBlock(difficultyLevel);

        this.miningMessage += `${Date.now()} - ${msg}\r\n`;
        this.miningMessage += `${Date.now()} - ${this.miningReward}₿ has been rewarded to the Address ${miningRewardAddress.substring(0, 4)}***...***${miningRewardAddress.substr(-4)}.\r\n`;

        // Update mineStatus & isMining & add block to the block chain.
        block.transaction.mineStatus = MineStatusEnum.Success;
        block.transaction.isMining = false;
        this.chain.push(block);

        // Remove the current transaction from the pending transaction.
        this.pendingTransactions = this.pendingTransactions.filter(e => e.id != transaction.id);

        // Mine rewarded transaction and add to the blockchain.
        this.mineRewardedTransaction(miningRewardAddress, transaction.id);

    }

    mineRewardedTransaction(miningRewardAddress: string, minedParentTransactionId: string) {

        const rewardedTransaction = new Transaction(Guid.create().toString(), this.DefautAddress, miningRewardAddress, this.miningReward, `Rewarded - ${this.miningReward}₿`, MineStatusEnum.Pending, Date.now(), true);
        rewardedTransaction.signTransaction(this.keyFromPrivate);

        let rewardedBlock = new Block(Guid.create().toString(), Date.now(), rewardedTransaction, this.getLatestBlock().hash);
        rewardedBlock.mineBlock(1);
        rewardedBlock.transaction.mineStatus = MineStatusEnum.Success;
        this.chain.push(rewardedBlock);

        const minedRewardText = `Congratulations🎉 You have been rewarded with ${this.miningReward}₿ for mining the transaction ${minedParentTransactionId}.`;
        const minedRewardTextNote = `Please note that the rewarded transaction will be automatically mined by the system and added to the Block Chain.`
        $("#minedRewardText").text(minedRewardText);
        $("#minedRewardTextNote").text(minedRewardTextNote);

    }

    getBalanceOfAddress(fromAddress: string) {

        let balance = 0;

        for (const block of this.chain) {
            // If the amount is sent to others...
            if (block.transaction.fromAddress === fromAddress) {
                balance -= block.transaction.amountTransferred;
            }

            // If the amount is received from others...
            if (block.transaction.toAddress == fromAddress) {
                balance += block.transaction.amountTransferred;
            }
        }

        for (const pTransaction of this.pendingTransactions) {
            // If the amount is sent to others...
            if (pTransaction.fromAddress === fromAddress) {
                balance -= pTransaction.amountTransferred;
            }
        }

        return balance;

    }

    isChainVaild() {
        
        for (let i = 1; i < this.chain.length; i++) { // i = 1 because we don't need to loop through Genesis Block.
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (!currentBlock.transaction.isTransactionValid(this.keyGenerator)) {
                return false;
            }

            if (currentBlock.hash !== currentBlock.createHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;

    }
}