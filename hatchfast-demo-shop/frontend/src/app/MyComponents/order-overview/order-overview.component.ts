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
import { get } from 'http';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-order-overview',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatCardModule, RouterLink, MatButtonModule,NavBarComponent, MatTooltipModule],
  templateUrl: './order-overview.component.html',
  styleUrl: './order-overview.component.css'
})
export class OrderOverviewComponent {

  cartProducts! : Product[];
  cartPrice: number = 0.0;
  taxPrice: number = 0.0;
  totalPrice: number = 0.0;

  
  

  constructor(
    private cartService: CartService
  ){

    this.cartProducts = AppHelper.getCartProducts()
    
  }

  finishButtonClick(){
    console.log("finishButtonClick")
    AppHelper.clearCart()

    //redirect to thank you page
  }

}

