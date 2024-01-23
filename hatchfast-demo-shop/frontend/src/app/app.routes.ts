import { Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { ProductDetailsComponent } from './MyComponents/product-details/product-details.component';
import { ProductListComponent } from './MyComponents/product-list/product-list.component';
import { ShoppingCartComponent } from './MyComponents/shopping-cart/shopping-cart.component';



export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'shop',
        component: ProductListComponent
    },
    {
        path: 'product/:productId',
        component: ProductDetailsComponent
    },
    {
        path:'cart',
        component: ShoppingCartComponent
    }
];
