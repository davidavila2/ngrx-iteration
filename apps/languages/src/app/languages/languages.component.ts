import { Component, OnInit } from '@angular/core';
import { Item, ItemsService } from '@workspace/core-data';



@Component({
  selector: 'workspace-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  items$;
  selectedItem: Item;

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  resetItem() {
    const emptyItem: Item = {
      id: null,
      name: '',
      description: '',
    }
    this.selectItem(emptyItem)
  }

  selectItem(item) {
    this.selectedItem = item;
  }

  saveItem(item) {
    if (!item.id) {
      this.createItem(item);
    } else {
      this.updateItem(item)
    }
  }

  updateItem(item) {
    this.itemService.update(item)
      .subscribe(result => {
        this.getItems();
        this.resetItem();
    })
  }

  createItem(item) {
    this.itemService.create(item)
      .subscribe(result => {
        this.getItems();
        this.resetItem();
      })
  }

  deleteItem(item) {
    this.itemService.delete(item.id)
      .subscribe(result => this.getItems());
  }

  getItems() {
    this.items$ = this.itemService.all();
  }

  cancel() {
    this.getItems();
    this.resetItem();
  }

}
