import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://api.kuroganehammer.com/api/characters'

@Injectable({
  providedIn: 'root'
})
export class EightService {

  constructor(private httpClient: HttpClient) { }

  findOne(eightId) {
    return this.httpClient.get(this.getUrlForId(eightId))
  }

  create(eight) {
    this.httpClient.post(this.getUrl(), eight);
  }

  update(eight) {
    return this.httpClient.patch(this.getUrlForId(eight.id), eight)
  }

  delete(eightId) {
    return this.httpClient.delete(this.getUrlForId(eightId))
  }

  getUrl() {
    return `${BASE_URL}`
  }

  getUrlForId(id) {
    return `${this.getUrl}/${id}`
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }
}