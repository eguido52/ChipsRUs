import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './details/details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
