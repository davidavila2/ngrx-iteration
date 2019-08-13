import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, timeout, delay } from 'rxjs/operators';

const BASE_URL = 'https://onepiecenocors.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class OnepieceService {

  constructor(private httpClient: HttpClient) { }

  create(onepiece) {
    return this.httpClient.post(this.getUrl(), onepiece);
  }

  findOne(onepieceId) {
    return this.httpClient.get(this.getUrlForId(onepieceId))
  }

  update(onepiece) {
    return this.httpClient.patch(this.getUrlForId(onepiece.id), onepiece)
  }

  delete(onepieceId) {
    return this.httpClient.delete(this.getUrlForId(onepieceId))
  }

  getUrlForId(id) {
    return `${this.getUrl}/${id}`
  }

  all() {
    return this.httpClient.get(this.getUrl()).pipe(
      delay(1000),
      map((res: any) => res.items)
    )
  }

  private getUrl() {
    return `${BASE_URL}`
  }
}
