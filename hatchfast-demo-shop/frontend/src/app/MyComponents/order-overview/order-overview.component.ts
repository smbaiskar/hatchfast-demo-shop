import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { Product } from '../../models/product';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { provideRouter, Route, RouterLink } from '@angular/router'; 
import { AppHelper } from '../shared/app.helper';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-order-overview',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatCardModule, RouterLink, MatButtonModule,NavBarComponent, MatTooltipModule],
  templateUrl: './order-overview.component.html',
  styleUrl: './order-overview.component.css'
})
export class OrderOverviewComponent {

  cartProducts! : Product[];

  constructor(
    private cartService: CartService
  ){

    this.cartProducts = AppHelper.getCartProducts()
 
    // this.cartProducts = AppHelper.getAllProducts()

  }

  finishButtonClick(){
    console.log("finishButtonClick")
    AppHelper.clearCart()

    //redirect to thank you page
  }

}

