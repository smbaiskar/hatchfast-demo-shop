import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { AppHelper } from '../shared/app.helper';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip'; 

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule }  from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';








@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatToolbarModule,MatTooltipModule,RouterLink,MatButtonModule, MatDividerModule, MatIconModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | Product;
  productId!: any;
  product!: Product | undefined;
  product1 :any;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      const productId = +params['id']; // Convert the parameter to a number
      // Fetch product details using the productId (e.g., from a service)
      // Assign the fetched product details to this.product
    });
   }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get("productId");
    console.log(this.productId);
    this.product = AppHelper.getProductForId(this.productId);


  }

  addToCart() {
    console.log(this.productId)
    AppHelper.addToCart(this.productId)
  }

}
