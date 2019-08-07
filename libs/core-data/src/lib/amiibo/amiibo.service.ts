import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

const BASE_URL = 'https://www.amiiboapi.com/api/amiibo/';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  constructor(private httpClient: HttpClient) { }

  create(amiibo) {
    return this.httpClient.post(this.getUrl(), amiibo)
  }

  update(amiibo) {
    return this.httpClient.patch(this.getUrlForId(amiibo.id), amiibo)
  }

  delete(amiiboId) {
    return this.httpClient.delete(this.getUrlForId(amiiboId))
  }
  
  all() {
    return this.httpClient.get(this.getUrl()).pipe(
      map((amiibo: any) => amiibo.amiibo)
    );
  }

    private getUrl() {
    return `${BASE_URL}`;
  }

  private getUrlForId(id) {
    return `${this.getUrl()}/${id}`
  }
}
