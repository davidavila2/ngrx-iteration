import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://swapi.co/api/people/'

@Injectable({
  providedIn: 'root'
})
export class SomethingService {

  constructor(private httpClient: HttpClient) { }
  
  getUrl() {
    return `${BASE_URL}`
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }
}
