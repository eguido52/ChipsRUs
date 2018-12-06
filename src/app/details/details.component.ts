import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {shopcartitem} from './../shopcartitem.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  chip$: Object;
  prod$: shopcartitem;
  formCart: FormGroup ;

  constructor(private product: ProductsService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.chip$ = params.id);
  }

  ngOnInit() {
    this.product.getChip(this.chip$).subscribe(
      product => this.chip$ = product
    );
    this.prod$ = this.product.getchipdata(this.chip$);
    // console.log(this.data.getchipdata(this.chip$).subscribe(data => this.stuff$ = data))
    console.log(this.prod$);


  }
}
