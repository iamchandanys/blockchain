import * as SHA256 from 'crypto-js/sha256';
import * as elliptic from "elliptic";
import { KeyGenerator } from './key-generator';
import { BlockChainDefaultFields } from './block-chain-enums'

export class Transaction {

    id: string;
    fromAddress: string;
    toAddress: string;
    amountTransferred: number;
    note: string;
    mineStatus: string; // Helper field to check whether the mine is done or not.
    timeStamp: number;
    isRewardedTrans: boolean;
    isMining: boolean; // Helper field to check whether the transaction is currently mining or not to show/hide the loader.
    signature: string;

    constructor(id: string, fromAddress: string, toAddress: string, amountTransferred: number, note: string, mineStatus: string, timeStamp: number, isRewardedTransaction: boolean) {

        this.id = id;
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amountTransferred = amountTransferred;
        this.note = note;
        this.mineStatus = mineStatus;
        this.timeStamp = timeStamp;
        this.isRewardedTrans = isRewardedTransaction;

    }

    calculateHash() {

        return SHA256(this.id + this.fromAddress + this.toAddress + this.amountTransferred + this.note + this.timeStamp).toString();

    }

    signTransaction(signingKey: elliptic.ec.KeyPair) { // signingKey = Keys from Private Key

        if (!this.fromAddress.includes(BlockChainDefaultFields.defaultSystemAddressCode)) {
            if (signingKey.getPublic('hex') !== this.fromAddress) {
                throw new Error('You cannot sign transactions for other wallets.');
            }
        }

        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, 'base64');
        this.signature = sig.toDER('hex');

    }

    isTransactionValid(keyGenerator: KeyGenerator): boolean {

        if (!this.signature || this.signature.length === 0) {
            throw new Error("No signature found in this transaction.");
        }

        return keyGenerator.key.verify(this.calculateHash(), this.signature);

    }
}

export class Block {

    id: string;
    timeStamp: number;
    transaction: Transaction;
    previousHash: string;
    hash: string;
    nonce: number;

    constructor(id: string, timeStamp: number, transaction: Transaction, previousHash: string = '') {

        this.id = id;
        this.timeStamp = timeStamp;
        this.transaction = transaction;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.createHash();

    }

    createHash() {

        const filteredTransaction = {
            id: this.transaction.id,
            fromAddress: this.transaction.fromAddress,
            toAddress: this.transaction.toAddress,
            amountTransferred: this.transaction.amountTransferred,
            note: this.transaction.note,
            timeStamp: this.transaction.note,
            isRewardedTrans: this.transaction.isRewardedTrans,
            signature: this.transaction.signature
        };

        return SHA256(this.id + this.timeStamp + JSON.stringify(filteredTransaction) + this.previousHash + this.nonce).toString();

    }

    mineBlock(difficulty: number): string {

        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.createHash();
        }

        return "Block mined successfully.";

    }
}