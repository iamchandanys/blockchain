import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-my-git-repo-block-chain',
  templateUrl: './my-git-repo-block-chain.component.html',
  styleUrls: ['./my-git-repo-block-chain.component.scss']
})
export class MyGitRepoBlockChainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  viewLiveDemo() {

    window.open(`${window.location.origin}/blockchain`, '_blank');

  }

}