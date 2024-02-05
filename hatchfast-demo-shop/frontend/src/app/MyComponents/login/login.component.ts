import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppHelper } from '../shared/app.helper';



@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [MatButtonModule, FormsModule, MatFormFieldModule,
    MatInputModule, MatToolbarModule, MatIconModule, MatCardModule, HttpClientModule,
    FormsModule, ReactiveFormsModule]

})
export class LoginComponent {


  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router,
    private http: HttpClient) {
    AppHelper.setLoggedInUser(null)
    AppHelper.clearCart()
  }

  loginButtonClick() {

    console.log(this.loginForm.get('userName')?.value)
    console.log(this.loginForm.get('password')?.value)
    let userName = this.loginForm.get('userName')?.value
    let pass = this.loginForm.get('password')?.value

    this.http.post('http://localhost:8081/mypath/login/test', {
      "userName": userName,
      "password": pass
    }).subscribe((response: any) => {
      // handle response body
      console.log(response)

      if (response) {

        if (response.error) {
          alert(response.message)
        } else {
          // if credentials are valid, set logged-in user in AppHelper and notify subscribers
          AppHelper.setLoggedInUser(response.customer)
          this.router.navigate(['/shop']);
        }

      } else {
        AppHelper.setLoggedInUser(null)
        alert('Invalid credentials')
      }
    },
      error => {
        // handle error response
        console.log(error)
        alert(error.message)
      });

  }
}
