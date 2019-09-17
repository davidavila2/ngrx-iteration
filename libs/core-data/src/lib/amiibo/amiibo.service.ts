import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Amiibo } from './amiibo';

const BASE_URL = 'https://www.amiiboapi.com/api/amiibo/';

@Injectable({
  providedIn: 'root'
})
  
export class AmiiboService {

  constructor(private httpClient: HttpClient) { }

  create(amiibo: Amiibo): Observable<Amiibo> {
    return this.httpClient.post<Amiibo>(this.getUrl(), amiibo)
  }

  update(amiibo: Amiibo): Observable<Amiibo> {
    return this.httpClient.patch<Amiibo>(this.getUrlForId(amiibo.id), amiibo)
  }

  delete(amiiboId: number): Observable<number> {
    return this.httpClient.delete<number>(this.getUrlForId(amiiboId))
  }
  
  all(): Observable<Amiibo> {
    return this.httpClient.get(this.getUrl()).pipe(
      map((amiibo: any) => amiibo.amiibo)
    );
  }

    private getUrl(): string {
    return `${BASE_URL}`;
  }

  private getUrlForId(id): string {
    return `${this.getUrl()}/${id}`
  }
}
