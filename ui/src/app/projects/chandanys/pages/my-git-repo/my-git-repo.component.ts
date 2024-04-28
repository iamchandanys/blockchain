import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../../service/ui.service';

@Component({
  selector: 'app-my-git-repo',
  templateUrl: './my-git-repo.component.html',
  styleUrls: ['./my-git-repo.component.scss']
})
export class MyGitRepoComponent implements OnInit {

  myGitRepo = [];

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.uiService.getGitRepoJSON().subscribe(
      (data) => {
        this.myGitRepo = data;
      },
      () => { }
    )
  }

}
