import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../Services/data-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalCost: number;
  constructor(public dataService: DataServiceService) { }

  ngOnInit() {
    this.totalCost = 0;
    this.totalCost = this.calculateCost();
  }
  calculateCost() {
    let cost = 0;
    this.dataService.quantities.forEach((item) => {
      cost = cost + item.quantity * item.item.price;
    });
    return cost;
  }
}
