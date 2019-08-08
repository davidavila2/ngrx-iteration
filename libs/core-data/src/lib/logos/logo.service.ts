import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';

// const BASE_URL = "https://material-icons-data.herokuapp.com/"

const BASE_URL = "https://mat-icons-icon.herokuapp.com/"
@Injectable({
  providedIn: 'root'
})
export class LogoService {

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`
  }

  all() {
    return this.httpClient.get(this.getUrl()).pipe(
      map((res: any) => res.categories),
      map((res: any) => res.map((icons: any, i) => ({id: i, ...icons}))),
    );
  }

}