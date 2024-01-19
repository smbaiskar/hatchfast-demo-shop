import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

 

  shopProducts: Product[] = [
    new Product("Water Bottle", "A handy water bottle for your pocket friendly use", "bottle", 14.99 ),
    new Product("Water Bottle2", "A handy water bottle for your pocket friendly use", "bottle", 14.99 )
  ]
}
