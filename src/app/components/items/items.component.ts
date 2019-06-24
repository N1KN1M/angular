import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        id: 56001,
        name: 'Bananas',
        price: 40
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
  }

}
