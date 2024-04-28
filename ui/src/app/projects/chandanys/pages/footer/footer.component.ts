import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  instagramLink: string = environment.instagramLink;
  twitterLink: string = environment.twitterLink;
  githubLink: string = environment.githubLink;
  stackoverflowLink: string = environment.stackoverflowLink;
  linkedinLink: string = environment.linkedinLink;
  androidAppLink: string = environment.androidAppLink;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onClickMyName() {

    window.open(`${window.location.origin}/home`, '_blank');

  }

}
