import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Nine } from './nine';
import { of } from 'rxjs';

const BASE_URL = 'https://hp-api.herokuapp.com/api/characters'

@Injectable({
  providedIn: 'root'
})
export class NineService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get(this.getUrl()).pipe(
      map((result: any[]) => result.map((res, index) => ({ id: ++index, ...res })))
    );
  }

  findOne(id) {
    return this.httpClient.get(this.getUrlForName(id));
  }

  getUrlForName(name) {
    return `${this.getUrl()}/${name}`
  }

  create(name) {
    delete name.id;
    const generateId = Math.floor(Math.random() * (50 - 30 + 1) + 30);
    return of(({id: generateId, ...name}))
  }

  update(name) {
    return this.httpClient.patch(this.getUrlForName(name.name), name)
  }

  delete(nameId) {
    return this.httpClient.delete(this.getUrlForName(nameId))
  }

  private getUrl() {
    return `${BASE_URL}`
  }
}
