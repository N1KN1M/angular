import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../Services/data-service.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  successMsg: boolean;
  expiryMonth: number;
  expiryYear: number;
  cvv: number;
  cardNumber: number;
  constructor(public dataService: DataServiceService) { }

  ngOnInit() {

  }
  validateCCAndPay() {
    this.successMsg = true;
  }
}
