import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  // standalone: true,
  // imports: [MatRadioModule, FormsModule],
})
export class StepperComponent implements OnInit {
  isLinear = true;
  @ViewChild('stepper') private stepper!: MatStepper;

  constructor(private builder: FormBuilder) {}
  Empregister = this.builder.group({
    personalInfo: this.builder.group({
      fullname: this.builder.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(17),
      ]),
      email: this.builder.control('', [Validators.required, Validators.email]),

      phone: this.builder.control('', [
        Validators.required,
        Validators.pattern('\\+995[0-9]{9}'),
      ]),
    }),
    plan: this.builder.group({
      chosenPlan: ['', Validators.required],
      isYearly: [false],
    }),
    address: this.builder.group({
      onlineService: [true],
      largerStorage: [true],
      customizableProfile: [false],
      price: [0],
    }),
  });

  ngOnInit(): void {}

  handleNextStep() {
    if (this.stepper.selectedIndex === 0 && this.personalForm.valid) {
      this.stepper.next();
    } else if (this.stepper.selectedIndex === 1 && this.planForm.valid) {
      this.stepper.next();
    } else if (this.stepper.selectedIndex === 2 && this.addressForm.valid) {
      this.stepper.next();
    }
  }

  get personalForm() {
    return this.Empregister.get('personalInfo') as FormGroup;
  }
  get planForm() {
    return this.Empregister.get('plan') as FormGroup;
  }
  get addressForm() {
    return this.Empregister.get('address') as FormGroup;
  }

  get isYearly() {
    return this.planForm.get('isYearly')?.value;
  }

  handleSubmit() {
    if (this.Empregister.valid) {
      console.log(this.Empregister.value);
    }
  }
}
