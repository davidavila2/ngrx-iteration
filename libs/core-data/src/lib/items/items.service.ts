import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './items.model';

const BASE_URL = 'https://levelup-authenticated-api.herokuapp.com/'
const model = 'items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { } 

  all() {
    return this.httpClient.get(this.getUrl());
  }

  findOne(itemId: number) {
    return this.httpClient.get(this.getUrlForId(itemId));
  }

  create(item: Item) {
    return this.httpClient.post(this.getUrl(), item);
  }

  update(item: Item) {
    return this.httpClient.patch(this.getUrlForId(item.id), item);
  }

  delete(itemId: number) {
    return this.httpClient.delete(this.getUrlForId(itemId))
  }

  private getUrl() {
    return `${BASE_URL}${model}`;
  }

  private getUrlForId(id: number) {
    return `${this.getUrl()}/${id}`;
  }
}
