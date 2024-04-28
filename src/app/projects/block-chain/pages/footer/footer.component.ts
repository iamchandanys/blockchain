import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickMyName() {
    window.open(`https://www.chandanys.in/`, '_blank');
  }

  onClickSourceCode() {
    window.open(`https://github.com/iamchandanys/blockchain.demo`, '_blank');
  }
}
