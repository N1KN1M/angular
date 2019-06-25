import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item/Item';
import {ItemQuantity} from '../../models/item/ItemQuantity';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemQuantities: ItemQuantity[] = [];
  items: Item[];
  constructor() { }

  ngOnInit() {

    this.items = [
      {
        id: 56001,
        name: 'Bananas',
        price: 40,
      },
      {
        id: 56002,
        name: 'Apples',
        price: 100
      },
      {
        id: 56003,
        name: 'Mangoes',
        price: 80
      }
    ];
    this.items.forEach((value) => {
      this.itemQuantities.push(new ItemQuantity(value, 0));
    });
  }
  updateQuantity(itemQuantity: ItemQuantity) {
    let obj = this.itemQuantities.find(objs => objs.item.id === 3);
    obj = itemQuantity;
  }
  test() {
    console.log(this.itemQuantities);
  }
}
