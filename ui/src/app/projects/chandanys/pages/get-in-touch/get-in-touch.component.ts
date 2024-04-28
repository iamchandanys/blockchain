import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //On click of Say Hello
  onClickGetInTouch() {
    $('#staticBackdrop').modal('show');
  }

}
