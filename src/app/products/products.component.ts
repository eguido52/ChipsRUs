import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  chips$: Object;

  constructor(private product: ProductsService) { }

  ngOnInit() {
    this.product.getChips().subscribe(
      product => this.chips$ = product
    );
    console.log(this.chips$);
  }

}
