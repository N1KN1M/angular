import { Component, OnInit } from '@angular/core';

import {ItemQuantity} from '../../models/item/ItemQuantity';
import {Router} from '@angular/router';
import {DataServiceService} from '../../Services/data-service.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private router: Router, public dataService: DataServiceService, public http: HttpClient) { }

  ngOnInit() {
    if (this.dataService.quantities.length === 0) {
      this.fetchData();
    }
  }
  fetchData() {
    this.dataService.getItems().subscribe((res: any[]) => {
      res.forEach( (item) => {
        this.dataService.quantities.push(new ItemQuantity(item, 0));
      });
   });
  }
  goToCart() {
    this.router.navigateByUrl('/checkout');
  }
}
