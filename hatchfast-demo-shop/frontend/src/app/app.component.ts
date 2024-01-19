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





@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MatButtonModule, RouterOutlet, FormsModule, 
  MatFormFieldModule, MatInputModule, MatToolbarModule, 
  MatIconModule, MatCardModule, HttpClientModule,
  FormsModule, ReactiveFormsModule  ]
})
export class AppComponent {
  title: string = 'cloud market';
}
