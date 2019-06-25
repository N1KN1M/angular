import {Component, Input, OnInit} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import {ItemQuantity} from '../../models/item/ItemQuantity';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent implements OnInit {
  @Input() itemQuantity: ItemQuantity;

  constructor() { }

  ngOnInit() {
  }

  onIncrease() {
    this.itemQuantity.quantity = this.itemQuantity.quantity + 1;
    console.log('Name: ' + this.itemQuantity.item.name + '| Price: ' + this.itemQuantity.item.price
      + ' |Quantity: ' + this.itemQuantity.quantity);

  }

  onDecrease() {
    if (this.itemQuantity.quantity !== 0) {
      this.itemQuantity.quantity = this.itemQuantity.quantity - 1;
    }
    console.log('Name: ' + this.itemQuantity.item.name + '| Price: ' + this.itemQuantity.item.price
      + ' |Quantity: ' + this.itemQuantity.quantity);

  }
}
