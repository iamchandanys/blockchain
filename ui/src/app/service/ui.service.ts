import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private httpClient: HttpClient) { }

  getGitRepoJSON() {
    return this.httpClient.get<any>("./assets/json-files/gitrepo.json");
  }

  getLangKnownJSON() {
    return this.httpClient.get<any>("./assets/json-files/lang-known.json");
  }

  getLangKnownOthersJSON() {
    return this.httpClient.get<any>("./assets/json-files/lang-known-others.json");
  }
}
