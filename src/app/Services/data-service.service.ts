import { Injectable } from '@angular/core';
import {ItemQuantity} from '../models/item/ItemQuantity';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  quantities: ItemQuantity[];
  totalCost: number;
  constructor(public http: HttpClient) {
    this.quantities = [];
    this.totalCost = 0;
  }
  getItems(): Observable<any> {
    return this.http.get('http://localhost:8080/post');
  }
}
