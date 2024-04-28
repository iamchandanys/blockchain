import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../../helper/block';
import { BlockChain } from '../../helper/block-chain';
declare var $: any;

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  @Input()
  blockChain: BlockChain;
  viewedBlock = {
    timeStamp: 0,
    transaction: {
      id: ""
    }
  };
  viewedBlockBackup = {
    timeStamp: 0,
    transaction: {
      id: ""
    }
  };

  constructor() { }

  ngOnInit(): void { }

  viewBlockDetails(blockDetails: Block) {

    if (this.blockChain.chain[0].id == blockDetails.id) {
      window.alert('Transaction details of Genesis Block will not be shown.');
      return;
    }

    var stringifiedBlock = JSON.stringify(blockDetails);
    this.viewedBlock = JSON.parse(stringifiedBlock) as Block;
    this.viewedBlockBackup = JSON.parse(stringifiedBlock) as Block;
    $('#viewBlockDetailsModal').modal('show');

  }

  updateTamperedBlockDetails(tamperedBlock: Block) {

    for (let block of this.blockChain.chain) {
      if (block.id == tamperedBlock.id) {

        block.hash = tamperedBlock.hash;
        block.previousHash = tamperedBlock.previousHash;
        block.nonce = tamperedBlock.nonce;
        block.timeStamp = tamperedBlock.timeStamp;
        block.transaction.id = tamperedBlock.transaction.id;
        block.transaction.amountTransferred = tamperedBlock.transaction.amountTransferred;
        block.transaction.fromAddress = tamperedBlock.transaction.fromAddress;
        block.transaction.toAddress = tamperedBlock.transaction.toAddress;
        block.transaction.note = tamperedBlock.transaction.note;
        block.transaction.timeStamp = tamperedBlock.transaction.timeStamp;

      }
    }

  }

}
