import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Plan, plans } from '../interfaces/plan';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  @Input() planForm!: FormGroup;
  @Input() parentStepper!: MatStepper; // Input for parent stepper

  isYearly: boolean = false;
  submitted: boolean = false;
  plans: Plan[] = plans;
  planError: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Set initial isYearly value from the form
    this.isYearly = this.planForm.get('isYearly')?.value || false;
  }

  selectPlan(plan: Plan): void {
    this.submitted = true;
    this.planError = false;
    const selectedPlan = {
      name: plan.name,
      price: this.isYearly ? plan.monthlyPrice * 10 : plan.monthlyPrice,
    };
    this.planForm.get('chosenPlan')?.setValue(selectedPlan);
  }

  trackByFn(index: number, item: Plan): number {
    return item.id;
  }

  getPrice(plan: Plan): string {
    const price = this.isYearly ? plan.monthlyPrice * 10 : plan.monthlyPrice;
    return `$${price}/${this.isYearly ? 'yr' : 'mo'}`;
  }

  toggleYearly(): void {
    this.isYearly = !this.isYearly;
    this.planForm.get('isYearly')?.setValue(this.isYearly);

    // Update the price of the chosen plan if already selected
    if (this.planForm.get('chosenPlan')?.value) {
      const chosenPlanName = this.planForm.get('chosenPlan')?.value.name;
      const selectedPlan = this.plans.find(
        (plan) => plan.name === chosenPlanName
      );
      if (selectedPlan) {
        this.selectPlan(selectedPlan);
      }
    }
  }

  isPlanSelected(plan: Plan): boolean {
    const chosenPlanValue = this.planForm.get('chosenPlan')?.value;
    const planPrice = this.isYearly
      ? plan.monthlyPrice * 10
      : plan.monthlyPrice;
    return chosenPlanValue && chosenPlanValue.price === planPrice;
  }

  validateForm() {
    this.submitted = true;
    if (!this.planForm.get('chosenPlan')?.value) {
      this.planError = true;
      return false;
    }
    return false;
  }
}
