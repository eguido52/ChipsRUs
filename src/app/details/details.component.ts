import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from './../products.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {Shopcartitem} from './../shopcartitem.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  chip$: Object;
  info$: Object;
  cart$: Shopcartitem;
  temp$: Array<Shopcartitem>;

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,
    private router: Router,
    private product: ProductsService,
    private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.chip$ = params.id);
    this.chip$ = {'name': '', 'price': '', 'description': '', 'stock': '', 'imageUrl': ''};
    this.cart$ = new Shopcartitem;
    this.temp$ = new Array;
    if (!this.storage.get('cart')) {
      this.storage.set('cart', new Array);
      console.log('making new cart');
    }
  }

  ngOnInit() {
    this.product.getChip(this.chip$).subscribe(
      product => this.chip$ = product
    );
  }

  addtocart(event) {
    console.log(this.info$);
    console.log(this.chip$);
    event.preventDefault();
    // const target = event.target;
    // const quantity = target.querySelector('#sel1').value;

    // this.cart.getChip(this.info$).subscribe(data => this.chip$ = data);

    if (this.info$) {
      this.cart$.createshopcartitem(this.info$['id'], this.info$['name'], this.info$['stock'], this.info$['price']);
    }
    console.log(this.cart$);
    this.temp$ = this.storage.get('cart');
    this.temp$.push(this.cart$);
    this.storage.set('cart', this.temp$);
    console.log('Just stored' + this.storage.get('cart').length);
    this.router.navigate(['/cart']);
  }
}
