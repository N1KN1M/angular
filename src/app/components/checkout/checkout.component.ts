import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../Services/data-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  paymentType: string;
  constructor(private router: Router, public dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.totalCost = this.calculateCost();
  }
  calculateCost() {
    let cost = 0;
    this.dataService.quantities.forEach((item) => {
      cost = cost + item.quantity * item.item.price;
    });
    return cost;
  }

  goToPaymentPage() {
    this.router.navigateByUrl('/payment/' + this.paymentType);
  }
}
