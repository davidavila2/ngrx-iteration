import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://ricknmorty-daga-set.herokuapp.com/'

@Injectable({
  providedIn: 'root'
})
export class RicknmortyService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get(this.getUrl()).pipe(map((res: any) => res.results));
  }

  getUrl() {
    return `${BASE_URL}`
  }

  findOne(rickId) {
    return this.httpClient.get(this.getUrlForId(rickId))
  }

  create(rick) {
    return this.httpClient.post(this.getUrl(), rick)
  }

  update(rick) {
    return this.httpClient.patch(this.getUrlForId(rick.id), rick)
  }

  delete(rickId) {
    return this.httpClient.delete(this.getUrlForId(rickId))
  }

  getUrlForId(id) {
    return `${this.getUrl}/${id}`
  }
}
