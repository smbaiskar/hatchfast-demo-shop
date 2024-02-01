import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { AppHelper } from '../shared/app.helper';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | Product;
  productId!: any;
  product!: Product | undefined;

  constructor(private route: ActivatedRoute) { }

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
