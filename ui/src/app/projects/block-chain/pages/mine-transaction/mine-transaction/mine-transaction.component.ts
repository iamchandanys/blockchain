import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transaction } from '../../../helper/block';
import { BlockChain } from '../../../helper/block-chain';

@Component({
  selector: 'app-mine-transaction',
  templateUrl: './mine-transaction.component.html',
  styleUrls: ['./mine-transaction.component.scss']
})
export class MineTransactionComponent implements OnInit {

  @Input()
  blockChain: BlockChain;
  @Output()
  updateWalletBalance = new EventEmitter<boolean>();
  difficultyLevel: number = 2;

  constructor() { }

  ngOnInit(): void { }

  minePendingTransactions(transaction: Transaction) {
    try {

      if (this.difficultyLevel <= 0) {
        window.alert('Invalid difficulty level.');
        return;
      }

      transaction.isMining = true;

      this.blockChain.minePendingTransactions(this.blockChain.keyGenerator.publicKey, transaction, this.difficultyLevel);
      this.updateWalletBalance.emit(true);

    } catch (error) {

      window.alert(error);

    }
  }

}