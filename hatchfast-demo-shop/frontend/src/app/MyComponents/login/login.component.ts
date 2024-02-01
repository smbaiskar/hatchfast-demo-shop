import { Component } from '@angular/core';
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

  // userName= new FormControl('');
  // password= new FormControl('');

  loginForm = new FormGroup({
    userName: new FormControl('demo', Validators.required),
    password: new FormControl('password', Validators.required),
  });

  constructor(private router: Router,
    private http: HttpClient) {
      AppHelper.setLoggedInUser(null)
      AppHelper.clearCart()
  }

  loginButtonClick() {

    console.log(this.loginForm.get('userName')?.value)
    console.log(this.loginForm.get('password')?.value)
    // this.http.post('https://api.example.com/endpoint', { data: 'some data' })
    //   .subscribe(data => {
    //     // handle the data
    //     //todo - make server call to check if user is valid
    //     //if valid, proceed to shop page otherwise show error notification

    //     this.router.navigate(['/shop']);
    //   });

      let userName = this.loginForm.get('userName')?.value
      let pass = this.loginForm.get('password')?.value

      if(userName == 'demo' && pass == 'password'){

        //send server request to validate credentials

        // if credentials are valid, set logged-in user in AppHelper and notify subscribers
        AppHelper.setLoggedInUser({"userName" : "TestUser", "userId" : 111})


        this.router.navigate(['/shop']);
      }else{
        AppHelper.setLoggedInUser(null)
        alert('Invalid credentials')
      }

  }
}
