import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {shopcartitem} from './shopcartitem.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getChips() {
    return this.http.get('https://chipsvc.herokuapp.com/chips');
  }
  getChip(chipId) {
    return this.http.get('https://chipsvc.herokuapp.com/chip/' + chipId);
  }

  getchipdata(chipId) {
    let mycart: shopcartitem;
    mycart = new shopcartitem;
    this.http.get<shopcartitem>('hhttps://chipsvc.herokuapp.com/chip/' + chipId).subscribe(resp => {
    mycart.stock = resp.stock;
    mycart.name = resp.name;
    mycart.price = resp.price;
    }
    );
    return mycart;
  }

}
