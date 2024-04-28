import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-in-touch-modal',
  templateUrl: './get-in-touch-modal.component.html',
  styleUrls: ['./get-in-touch-modal.component.scss']
})
export class GetInTouchModalComponent implements OnInit {

  mouseOveredMailCopy: boolean;
  mouseOveredMail: boolean;
  mouseOveredMessageInsta: boolean;
  displayMailCopiedTxt: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  //On click copy email id
  onClickCopyEmail(val) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (val));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');

    //Show and hide copied text...

    this.displayMailCopiedTxt = !this.displayMailCopiedTxt;
    setTimeout(() => {this.displayMailCopiedTxt = !this.displayMailCopiedTxt}, 2000);
  }

}
