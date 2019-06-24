import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item/Item';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent implements OnInit {
  @Input() item: Item;

  quantity = 0;
  constructor() { }

  ngOnInit() {
  }

  onIncrease(item) {
    this.quantity = this.quantity + 1;
    console.log('Name: ' + this.item.name + '| Price: ' + this.item.price + ' |Quantity: ' + this.quantity);
  }

  onDecrease(item) {
    if (this.quantity !== 0) {
      this.quantity = this.quantity - 1;
    }
    console.log('Name: ' + this.item.name + '| Price: ' + this.item.price + ' |Quantity: ' + this.quantity);
  }
}
