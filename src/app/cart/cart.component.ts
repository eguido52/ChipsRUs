import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {shopcartitem} from './../shopcartitem.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  chip$: Object;

  constructor(private product: ProductsService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.chip$ = params.id);
  }

  ngOnInit() {
    this.product.getChip('5c089f6abd2c520004b14176').subscribe(product => this.chip$ = product);
     this.chip$ = this.product.getchipdata(this.chip$);
    // console.log(this.data.getchipdata(this.chip$).subscribe(data => this.stuff$ = data))
    // console.log(this.prod$);


  }
}
