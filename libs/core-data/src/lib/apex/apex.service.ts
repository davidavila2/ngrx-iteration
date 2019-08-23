import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Apexx } from './apexx';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://apex-data-set.herokuapp.com/'

@Injectable({
  providedIn: 'root'
})
export class ApexService {

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`
  }

  getUrlForId(name) {
    return `${this.getUrl}/${name}`
  }

  all() {
    return this.httpClient.get(this.getUrl()).pipe(
      map((result: any[]) => result.map((res, index) => ({id: ++index, ...res})))
    );
  }

  findOne(apexId) {
    return this.httpClient.get(this.getUrlForId(apexId))
  }

  create(apex) {
    delete apex.id;
    const generateId = Math.floor(Math.random() * (50 - 12 + 1) + 12);
    return of(({id: generateId, ...apex}))
    // return this.httpClient.post(this.getUrl(), apex)
  }

  update(apex) {
    return this.httpClient.patch(this.getUrlForId(apex.id), apex)
  }

  delete(apexId) {
    return this.httpClient.delete(this.getUrlForId(apexId))
  }

}
