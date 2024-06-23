import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  isLinear = true;

  constructor(private builder: FormBuilder) {}
  Empregister = this.builder.group({
    basic: this.builder.group({
      firstname: this.builder.control('', Validators.required),
      lastname: this.builder.control('', Validators.required),
    }),
    contact: this.builder.group({
      email: this.builder.control('', [Validators.required, Validators.email]),
      phone: this.builder.control('', Validators.required),
    }),
    address: this.builder.group({
      street: this.builder.control('', Validators.required),
      city: this.builder.control('', Validators.required),
      pin: this.builder.control('', Validators.required),
    }),
  });

  ngOnInit(): void {}

  get basicForm() {
    return this.Empregister.get('basic') as FormGroup;
  }
  get contactForm() {
    return this.Empregister.get('contact') as FormGroup;
  }
  get addressForm() {
    return this.Empregister.get('address') as FormGroup;
  }

  HandleSubmit() {
    if (this.Empregister.valid) {
      console.log(this.Empregister.value);
    }
  }
}
