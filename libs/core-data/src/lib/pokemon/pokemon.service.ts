import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Pokemon, PokeResource } from './pokemon';
import { Observable, forkJoin } from 'rxjs';

const BASE_URL = 'https://pokeapi.co/api/v2/'
const model = 'pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<any> {
    return this.httpClient.get(this.getUrl()).pipe(
      map((originalPokeResponse: PokeResource) => originalPokeResponse.results),
      mergeMap(
        (arrayOfAllResults: Pokemon[]) => this.unwrapEachObservableInArray(arrayOfAllResults)
      ),
      map((arrayOfPokeObjects) => arrayOfPokeObjects.map(
        fullPokeObject => this.specificProperties(fullPokeObject)
      ))
    );
  }

  private getUrl() {
    return `${BASE_URL}${model}?limit=800`
  }

  private specificProperties(poke: any) {
    const { name, id, sprites } = poke;

    return { id, name, sprites };
  }

  private unwrapEachObservableInArray(arrayOfResults: any[]) {
    return (
      forkJoin(
        arrayOfResults.map(eachPokeInTheArray => this.httpClient.get(eachPokeInTheArray.url))
      )
    );
  }
}
