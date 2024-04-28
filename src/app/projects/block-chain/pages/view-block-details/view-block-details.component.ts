import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Block } from '../../helper/block';
declare var $: any;

@Component({
  selector: 'app-view-block-details',
  templateUrl: './view-block-details.component.html',
  styleUrls: ['./view-block-details.component.scss']
})
export class ViewBlockDetailsComponent implements OnInit {

  @Input()
  viewedBlock: Block;
  @Input()
  viewedBlockBackup: Block;
  isOptedForTamper: boolean = false;
  @Output()
  tamperedBlock = new EventEmitter<Block>();

  constructor() { }

  ngOnInit(): void { }

  tamperBlock() {

    this.isOptedForTamper = true;

  }

  updateTamperredBlock() {

    this.isOptedForTamper = false;
    this.tamperedBlock.emit(this.viewedBlock);
    $('#viewBlockDetailsModal').modal('hide');

  }

  onClickCancelTamperedBlock(isWhenCrossIconIsClicked: boolean = false) {

    if (!isWhenCrossIconIsClicked) {
      this.viewedBlock = this.viewedBlockBackup;
    }

    this.isOptedForTamper = false;

  }

}
