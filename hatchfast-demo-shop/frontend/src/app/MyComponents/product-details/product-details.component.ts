import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { AppHelper } from '../shared/app.helper';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatCardModule, ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  productId!: any;
  product!: Product | undefined;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get("productId");

    this.product = AppHelper.getProductForId(this.productId)
  }
  

}
