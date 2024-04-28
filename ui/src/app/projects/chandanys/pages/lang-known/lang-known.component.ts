import { Component, OnInit } from '@angular/core';
import { UiService } from '../../../../service/ui.service';

@Component({
  selector: 'app-lang-known',
  templateUrl: './lang-known.component.html',
  styleUrls: ['./lang-known.component.scss']
})
export class LangKnownComponent implements OnInit {

  langKnown = [];
  langKnownOthers = [];

  constructor(private uiService: UiService) {
  }

  ngOnInit(): void {
    this.getLangKnownJSON();
    this.getLangKnownOthersJSON();
  }

  getLangKnownJSON() {
    this.uiService.getLangKnownJSON().subscribe(
      (data) => {
        this.langKnown = data;
      },
      () => { }
    )
  }

  getLangKnownOthersJSON() {
    this.uiService.getLangKnownOthersJSON().subscribe(
      (data) => {
        if (data)
          this.langKnownOthers = data;
      },
      () => { }
    );
  }

}
