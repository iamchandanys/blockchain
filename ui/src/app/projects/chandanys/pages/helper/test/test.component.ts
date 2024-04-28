import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  userAgent: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  Test() {
    this.userAgent = window.navigator.userAgent;
    window.alert(this.userAgent);

    if (this.userAgent.indexOf('Android') >= 0) { 
      alert('Yes');
    } else { 
      alert('No');
    }
  }
}
