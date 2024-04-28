import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  myImg = environment.myImage;
  isScrollTextVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  //On click of Get In Touch btn
  onClickGetInTouch() {
    $('#staticBackdrop').modal('show');
  }

  //On click of Resume btn
  onClickResume() {
    window.open(environment.resumeFileLink, '_blank');
  }
}
