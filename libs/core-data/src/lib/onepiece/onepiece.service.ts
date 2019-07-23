import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://onepiecenocors.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class OnepieceService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  private getUrl() {
    return `${BASE_URL}`
  }
}
