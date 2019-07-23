import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { Marvel, Marvelresults } from './marvel';

const offset = 900
const BASE_URL = `https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=${offset}&apikey=3f4536965516065023aa7f4f9e40ebb3`

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get(this.getUrl()).pipe(
      map((res: any) => res.data.results)
    )
  }

  private getUrl() {
    return `${BASE_URL}`;
  }
}
