import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [MatStepperModule,FormsModule,ReactiveFormsModule,
    MatFormFieldModule,MatInputModule,MatButtonModule,RouterModule,CommonModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {

  // checkoutForm = new FormGroup({
  //   firstName: new FormControl('', Validators.required),
  //   lastName: new FormControl('', Validators.required),
  //   zipCode: new FormControl('', Validators.required),

  // });

  firstFormGroup: FormGroup = new FormGroup({ firstCtrl: new FormControl('', Validators.required) });
  secondFormGroup: FormGroup = new FormGroup({ secondCtrl: new FormControl('', Validators.required) });
  thirdFormGroup: FormGroup = new FormGroup({ thirdCtrl: new FormControl('', Validators.required) });

  constructor(private _formBuilder: FormBuilder) { }
  // firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  // secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });
  // thirdFormGroup: FormGroup = this._formBuilder.group({ thirdCtrl: [''] });
}