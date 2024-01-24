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


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatCardModule, MatTooltipModule, RouterLink, MatButtonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

 
  constructor(){

  }

  shopProducts: Product[] = AppHelper.getAllProducts()
 
  

  showProductDetails() {
    console.log('showProductDetails')
  }

  addToCart(productId:any){
    console.log(productId)
    AppHelper.addToCart(productId)


  }
}
