import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item/Item';
import {ItemQuantity} from '../../models/item/ItemQuantity';
import {Data, Router} from '@angular/router';
import { DataServiceService} from '../../Services/data-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  constructor(private router: Router, public dataService: DataServiceService) { }

  ngOnInit() {
    if (this.dataService.quantities.length === 0) {
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
        this.dataService.quantities.push(new ItemQuantity(value, 0));
      });
    }
  }


  goToCart() {
    this.router.navigateByUrl('/checkout');
  }
}
