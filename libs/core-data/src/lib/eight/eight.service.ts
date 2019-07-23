import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const BASE_URL = 'http://smashdb.me/api/characters'
const BASE_URL = 'https://api.kuroganehammer.com/api/characters'

@Injectable({
  providedIn: 'root'
})
export class EightService {

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }
}
