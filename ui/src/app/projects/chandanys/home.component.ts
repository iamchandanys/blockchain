import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Chandan Y S';
  showSplashScreen: boolean = true;

  constructor() { }

  ngOnInit(): void {
    AOS.init();

    this.switchSplashScreenToActualScreen();
  }

  switchSplashScreenToActualScreen() {
    setTimeout(() => {
      this.showSplashScreen = false;
    }, 3000);
  }

}
