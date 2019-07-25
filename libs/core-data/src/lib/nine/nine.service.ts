import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://hp-api.herokuapp.com/api/characters'

@Injectable({
  providedIn: 'root'
})
export class NineService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  // findOne(name) {
  //   return this.httpClient.get(this.getUrlForName(name));
  // }

  // getUrlForName(name) {
  //   return `${this.getUrl()}/${name}`
  // }

  private getUrl() {
    return `${BASE_URL}`
  }
}
