import { Injectable, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { Product } from './models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items:any[]=[];

  constructor() 
  {}
    addToCart(product:any)
    {
      this.items.push(Product);
    }
    getItems()
    {
      return this.items;
    }
   
}
