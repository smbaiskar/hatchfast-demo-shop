import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AppHelper } from './MyComponents/shared/app.helper';








@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  imports: [MatButtonModule, RouterOutlet, FormsModule,
    MatFormFieldModule, MatInputModule, MatToolbarModule,
    MatIconModule, MatCardModule, HttpClientModule,
    FormsModule, ReactiveFormsModule, CommonModule]
})
export class AppComponent {
  title: string = 'cloud market';
  cartCount: number = 0;
  isUserLoggedIn: boolean = false

  constructor() {
    this.cartCount = AppHelper.getCartElementsCount();
    AppHelper.getCartSubject()
      .subscribe(event => {
        this.cartCount = AppHelper.getCartElementsCount();
      })
    AppHelper.getLoggedInUserSubject()
      .subscribe(isLoggedIn => {
        this.isUserLoggedIn = isLoggedIn
      })

    // this.isUserLoggedIn = sessionStorage.getItem('DemoLoggedInUser') != undefined ? true : false;
      // let loggedInUserName = sessionStorage.getItem('DemoLoggedInUser')
      // localStorage.getItem('Test')
      // let sessionStorage : Storage
      // sessionStorage.getItem('DemoLoggedInUser')

      if (typeof window !== 'undefined') {
        console.log('we are running on the client')
        this.isUserLoggedIn = sessionStorage.getItem('DemoLoggedInUser') != undefined ? true : false;
    } else {
        console.log('we are running on the server');
    }

  }

  showCartPage(){
    console.log('showCartPage')
  }
}

