import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Apex } from './apex';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://apex-data-set.herokuapp.com/'

@Injectable({
  providedIn: 'root'
})
export class ApexService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get(this.getUrl()).pipe(
      map((result: any[]) => result.map((res, index) => ({ id: ++index, ...res })))
    );
  }

  findOne(apexId: number) {
    return this.httpClient.get(this.getUrlForId(apexId));
  }

  create(apex: Apex) {
    delete apex.id;
    const generateId = Math.floor(Math.random() * (50 - 12 + 1) + 12);
    return of(({ id: this.generateQuickGuid(), ...apex }));
  }

  update(apex: Apex) {
    return this.httpClient.patch(this.getUrlForId(apex.id), apex);
  }

  delete(apexId: number) {
    return this.httpClient.delete(this.getUrlForId(apexId));
  }

  private getUrl() {
    return BASE_URL;
  }

  private getUrlForId(id: number) {
    return `${this.getUrl}/${id}`;
  }

  generateQuickGuid() {
    return Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
  }



}
