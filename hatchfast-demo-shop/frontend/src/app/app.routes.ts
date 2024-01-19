import { Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { ProductListComponent } from './MyComponents/product-list/product-list.component';



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
    }
];
