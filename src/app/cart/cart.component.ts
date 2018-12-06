import { ProductsService } from './../products.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {Shopcartitem} from './../shopcartitem.component';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  chip$: Object;
  cartitems$: Array<Shopcartitem>;

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,
    private product: ProductsService,
    private route: ActivatedRoute) {
    // this.route.params.subscribe( params => this.chip$ = params.id);
    this.cartitems$ = this.storage.get('cart');
  }

  ngOnInit() {
    console.log('moved to cart');
    let j: any;
    // tslint:disable-next-line:forin
    for (j in this.cartitems$) {
      console.log('hello');
      console.log(this.cartitems$); // [j]['name'])
    }
    // this.prod$ = this.data.getchipdata(this.chip$)
    // console.log(this.data.getchipdata(this.chip$).subscribe(data => this.stuff$ = data))
    // console.log(this.prod$);
  }
}
