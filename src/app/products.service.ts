import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Shopcartitem} from './shopcartitem.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  chips$: {
    id: String,
    name: String,
    description: String,
    price: any,
    stock: any,
    imageUrl: String
  };

  constructor(private http: HttpClient) {
   }

  getChips() {
    return this.http.get('https://chipsvc.herokuapp.com/chips');
  }
  getChip(chipId) {
    // this.chips$ = this.http.get('https://chipsvc.herokuapp.com/chip/' + chipId);
    console.log('Chip: ', this.http.get('https://chipsvc.herokuapp.com/chip/' + chipId));
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
