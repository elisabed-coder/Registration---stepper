import { BreakpointObserver } from '@angular/cdk/layout';
import { CdkStepper, StepperOrientation } from '@angular/cdk/stepper';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepper } from '@angular/material/stepper';
import { map, Observable } from 'rxjs';
import { matStepperAnimations } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  isLinear = true;
  done: boolean = false;
  @ViewChild('stepper') private stepper!: MatStepper;
  stepperOrientation!: Observable<StepperOrientation>;

  constructor(
    private builder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 1199px)')
      .pipe(map(({ matches }) => (matches ? 'vertical' : 'horizontal')));
  }

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
    addOn: this.builder.group({
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
      console.log('Personal Info:', this.personalForm.value);
    } else if (this.stepper.selectedIndex === 1 && this.planForm.valid) {
      this.stepper.next();
      console.log('Plan Info:', this.planForm.value);
    } else if (this.stepper.selectedIndex === 2 && this.addOn.valid) {
      this.stepper.next();
      console.log('Add-on Info:', this.addOn.value);
    } else if (this.stepper.selectedIndex === 3) {
      this.handleSubmit();
    }
  }

  get personalForm() {
    return this.Empregister.get('personalInfo') as FormGroup;
  }
  get planForm() {
    return this.Empregister.get('plan') as FormGroup;
  }
  get addOn() {
    return this.Empregister.get('addOn') as FormGroup;
  }

  get isYearly() {
    return this.planForm.get('isYearly')?.value;
  }

  handleSubmit() {
    if (this.stepper.selectedIndex === 3) {
      if (this.Empregister.valid) {
        console.log(this.Empregister.value);
        this.done = true;
        // this.stepper.reset();
        // Handle final form submission here
      }
    }
  }
}
