import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://www.amiiboapi.com/api/amiibo/';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private httpClient: HttpClient) { }
  
  all() {
    return this.httpClient.get(this.getUrl());
  }

    private getUrl() {
    return `${BASE_URL}`;
  }

  private getUrlForId(id) {
    return `${this.getUrl()}/${id}`
  }
}
