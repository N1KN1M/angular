import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item/Item';
import {ItemQuantity} from '../../models/item/ItemQuantity';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent implements OnInit {
  @Input() item: Item;
  itemQuantity: ItemQuantity;
  constructor() { }

  ngOnInit() {
    this.itemQuantity = new ItemQuantity();
    this.itemQuantity.item = this.item;
    this.itemQuantity.quantity = 0;
  }

  onIncrease(item) {
    this.itemQuantity.quantity = this.itemQuantity.quantity + 1;
    console.log('Name: ' + this.itemQuantity.item.name + '| Price: ' + this.itemQuantity.item.price
      + ' |Quantity: ' + this.itemQuantity.quantity);
  }

  onDecrease(item) {
    if (this.itemQuantity.quantity !== 0) {
      this.itemQuantity.quantity = this.itemQuantity.quantity - 1;
    }
    console.log('Name: ' + this.itemQuantity.item.name + '| Price: ' + this.itemQuantity.item.price
      + ' |Quantity: ' + this.itemQuantity.quantity);
  }
}
