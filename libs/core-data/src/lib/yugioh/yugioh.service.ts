import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://ricknmorty-daga-set.herokuapp.com/'

@Injectable({
  providedIn: 'root'
})
export class YugiohService {

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }
}
