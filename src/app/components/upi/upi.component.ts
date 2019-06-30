import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../Services/data-service.service';


@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UPIComponent implements OnInit {
  successMsg: boolean;
  vpaId: string;
  constructor(public dataService: DataServiceService) { }

  ngOnInit() {
  }
  validateVPAAndPay() {

    this.successMsg = true;
  }
}
