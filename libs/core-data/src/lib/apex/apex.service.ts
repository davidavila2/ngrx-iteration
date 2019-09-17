import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Apex } from './apex';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://apex-data-set.herokuapp.com/'

@Injectable({
  providedIn: 'root'
})
export class ApexService {
  uuid = require('uuid/v1');

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Apex[]> {
    return this.httpClient.get(this.getUrl()).pipe(
      map((result: any[]) => result.map((res, index) => ({ id: ++index, ...res })))
    );
  }

  findOne(apexId: number): Observable<number> {
    return this.httpClient.get<number>(this.getUrlForId(apexId));
  }

  create(apex: Apex): Observable<Apex> {
    delete apex.id;
    // const generateId = Math.floor(Math.random() * (50 - 12 + 1) + 12);
    return of(({ id: this.uuid(), ...apex }));
  }

  update(apex: Apex): Observable<Apex> {
    return this.httpClient.patch<Apex>(this.getUrlForId(apex.id), apex);
  }

  delete(apexId: number): Observable<number> {
    return this.httpClient.delete<number>(this.getUrlForId(apexId));
  }

  private getUrl(): string {
    return BASE_URL;
  }

  private getUrlForId(id: number): string {
    return `${this.getUrl}/${id}`;
  }

  generateQuickGuid(): string {
    return Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
  }
}