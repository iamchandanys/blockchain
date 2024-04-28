import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transaction } from '../../helper/block';
import { BlockChain } from '../../helper/block-chain';
import { Guid } from 'guid-typescript';
import { MineStatusEnum } from '../../helper/block-chain-enums';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {

  @Input()
  blockChain: BlockChain;
  @Output()
  updateWalletBalance = new EventEmitter<boolean>();
  myPublicAddress: string;
  toAddress: string;
  amountToBeTransferred: number;
  note: string;

  constructor() { }

  ngOnInit(): void {

    this.initData();

  }

  initData() {

    this.myPublicAddress = this.blockChain.keyGenerator.publicKey;

  }

  sendMoney() {
    try {

      if (this.blockChain.getBalanceOfAddress(this.blockChain.keyGenerator.publicKey) < this.amountToBeTransferred) {
        window.alert('Insufficient wallet balance.');
        return;
      }

      // Transaction is signed using private key.
      // Your Private Key + A Transaction = Can generate a Signature.
      // Your Public Key + A Trasaction + A Correct Signature = Tells it's valid trasaction.
      // Your Public Key + A Trasaction + A Wrong Signature = Tells it's not a valid trasaction.
      // Basically, a Private Key can generate a Signature & a Public Key can only check whether the signature is valid or not.

      var transaction = new Transaction(Guid.create().toString(), this.myPublicAddress, this.toAddress, this.amountToBeTransferred, this.note, MineStatusEnum.Pending, Date.now(), false);
      transaction.signTransaction(this.blockChain.keyFromPrivate);

      this.blockChain.addTransaction(transaction);

      this.toAddress = this.amountToBeTransferred = this.note = null;
      this.updateWalletBalance.emit(true);

      setTimeout(() => {
        window.alert('Transaction Successfull! Please mine the block.');
      }, 500);

    } catch (error) {

      window.alert(error);

    }
  }

  generateDummyToAddress() {

    this.toAddress = Guid.create().toString();

  }
}
