import { Injectable } from '@angular/core';
import {ItemQuantity} from '../models/item/ItemQuantity';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  quantities: ItemQuantity[];
  constructor() {
    this.quantities = [];
  }
}
