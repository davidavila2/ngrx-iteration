import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Apex } from './apex';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://apex-data-set.herokuapp.com/'
import * as uuid  from 'uuid/v1';
@Injectable({
  providedIn: 'root'
})
export class ApexService {

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
    return of(({ id: uuid(), ...apex }));
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
}