import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Shopcartitem} from './shopcartitem.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
   }

  getChips() {
    return this.http.get('https://chipsvc.herokuapp.com/chips');
  }
  getChip(chipId): any {
    return this.http.get('https://chipsvc.herokuapp.com/chip/' + chipId);
  }

  getchipdata(chipId) {
    let mycart: Shopcartitem;
    mycart = new Shopcartitem;
    this.http.get<Shopcartitem>('hhttps://chipsvc.herokuapp.com/chip/' + chipId).subscribe(resp => {
    mycart.stock = resp.stock;
    mycart.name = resp.name;
    mycart.price = resp.price;
    }
    );
    return mycart;
  }

}
