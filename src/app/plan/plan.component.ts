import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plan } from '../interfaces/plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  @Input() planForm!: FormGroup;
  isYearly: boolean = false;
  submitted: boolean = false;

  plans: Plan[] = [
    {
      name: 'Arcade',
      icon: 'fa fa-neuter',
      monthlyPrice: 9,
      bgColor: '#FFA500',
    },
    {
      name: 'Advanced',
      icon: 'fa fa-gamepad',
      monthlyPrice: 12,
      bgColor: ' #c3195d',
    },
    {
      name: 'Pro',
      icon: 'fa fa-user',
      monthlyPrice: 15,
      bgColor: '#0000FF',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.initForm();
  }

  // private initForm(): void {
  //   if (!this.planForm) {
  //     this.planForm = this.fb.group({});
  //   }
  //   if (!this.planForm.get('chosenPlan')) {
  //     this.planForm.addControl(
  //       'chosenPlan',
  //       this.fb.control('', Validators.required)
  //     );
  //   }
  //   if (!this.planForm.get('isYearly')) {
  //     this.planForm.addControl('isYearly', this.fb.control(false));
  //   }
  // }

  selectPlan(plan: Plan): void {
    // this.submitted = true;
    const selectedPlan = {
      name: plan.name,
      price: this.isYearly ? plan.monthlyPrice * 10 : plan.monthlyPrice,
    };
    this.planForm.get('chosenPlan')?.setValue(selectedPlan);
  }

  // checkFormValidity(): void {
  //   this.submitted = true;
  //   if (!this.planForm.get('chosenPlan')?.value) {
  //     // Form is invalid, don't proceed
  //     return;
  //   }
  // }

  trackByFn(index: number, item: Plan): string {
    return item.name;
  }

  getPrice(plan: Plan): string {
    const price = this.isYearly ? plan.monthlyPrice * 10 : plan.monthlyPrice;
    return `$${price}/${this.isYearly ? 'yr' : 'mo'}`;
  }

  toggleYearly(): void {
    this.isYearly = !this.isYearly;
    this.planForm.get('isYearly')?.setValue(this.isYearly);
  }

  isPlanSelected(plan: Plan): boolean {
    const chosenPlanValue = this.planForm.get('chosenPlan')?.value;
    const planPrice = this.isYearly
      ? plan.monthlyPrice * 10
      : plan.monthlyPrice;
    return chosenPlanValue && chosenPlanValue.price === planPrice;
  }
}
