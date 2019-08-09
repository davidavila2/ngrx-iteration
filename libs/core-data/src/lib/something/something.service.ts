import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://swapi.co/api/people/'

@Injectable({
  providedIn: 'root'
})
export class SomethingService {

  constructor(private httpClient: HttpClient) { }
  
  getUrl() {
    return `${BASE_URL}`
  }

  getUrlForId(id) {
    return `${this.getUrl}/${id}`
  }

  all() {
    return this.httpClient.get(this.getUrl()).pipe(
      map((res: any) => res.results),
      map((res: any) => res.map((results: any, i) => ({id: i, ...results})))
    );
  }

  // all() {
  //   return this.httpClient.get(this.getUrl()).pipe(
  //     map((res: any) => res.results)
  //   );
  // }

  // all() {
  //   return this.httpClient.get(this.getUrl());
  // }

  create(project) {
    return this.httpClient.post(this.getUrl(), project)
  }

  update(project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project)
  }

  delete(projectId) {
    return this.httpClient.delete(this.getUrlForId(projectId))
  }
}
