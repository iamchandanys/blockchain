import { Component, OnInit } from '@angular/core';
import { BlockChain } from './helper/block-chain';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-block-chain',
  templateUrl: './block-chain.component.html',
  styleUrls: ['./block-chain.component.scss']
})
export class BlockChainComponent implements OnInit {

  blockChain: BlockChain = new BlockChain();
  availableWalletBalance: number = 0;

  constructor(public router: Router, private title: Title) {

    title.setTitle("Block Chain Technology");
    this.blockChain = new BlockChain();
    this.blockChain.chain.push(this.blockChain.createGenesisBlock(this.blockChain.DefautAddress, this.blockChain.keyGenerator.publicKey, 50));

  }

  ngOnInit(): void {

    this.updateWalletBalance();
    this.warnUserBeforeReloadingPage();

  }

  minePendingTransactions() {

    if (this.blockChain.pendingTransactions && this.blockChain.pendingTransactions.length <= 0) {
      window.alert('No pending transactions found.');
      return;
    }

    $('#mineTransactionModal').modal('show');

  }

  updateWalletBalance(result: any = null) {

    this.availableWalletBalance = this.blockChain.getBalanceOfAddress(this.blockChain.keyGenerator.publicKey);

  }

  viewPrivateAddress() {

    if (confirm('A private address is a secret code that is used in cryptography, similar to a password. In cryptocurrency, private address are also used to sign transactions and prove ownership of a blockchain address. It\'s called a private address because it is meant to be kept private and not shown to other people. So click on Ok to view your private address orelse click on Cancel.')) {
      window.alert('Your private address - ' + this.blockChain.keyGenerator.privateKey);
    } else {
      // Do nothing!
    }

  }

  reverifyBlockChain() {

    const result = this.blockChain.isChainVaild();

    if (result) {
      window.alert('✅ All blocks are re-verified & everthing looks good.');
    } else {
      window.alert('❌ Some or one of the block might have been tampered.');
    }

  }

  onClickLogo() {

    if (confirm('Are you sure? Navigating will refresh the data.')) {
      this.router.navigateByUrl('/home');
    } else {
      // Do nothing...
    }

  }

  warnUserBeforeReloadingPage() {

    window.addEventListener("beforeunload", function (e) {

      if (window.location.pathname == '/blockchain') {
        var confirmationMessage = "\o/";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
      }

    });

  }

  onClickWhitePaper() {

    window.open(environment.blockChainDemoLink);

  }
}
