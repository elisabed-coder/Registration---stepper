import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { plans } from '../interfaces/plan';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  @Input() personalInfoForm!: FormGroup;
  @Input() planForm!: FormGroup;
  @Input() addOnForm!: FormGroup;
  @Input() isYearly!: boolean;

  totalPrice: number = 0;
  planName: string = '';
  planPrice: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.calculateTotalPrice();
    this.setupFormListeners();
  }

  getPlanDetails() {
    const chosenPlan = this.planForm.get('chosenPlan')?.value;
    if (chosenPlan && chosenPlan.name && chosenPlan.price !== undefined) {
      this.planName = chosenPlan.name;
      this.planPrice = chosenPlan.price;
    } else {
      this.planName = 'Unknown Plan';
      this.planPrice = 0;
    }
  }

  calculateTotalPrice() {
    this.getPlanDetails();
    const addOnPrice = this.calculateAddOnPrice();
    this.totalPrice = (this.planPrice || 0) + (addOnPrice || 0);
  }

  calculateAddOnPrice(): number {
    let addOnPrice = 0;
    if (this.addOnForm.get('onlineService')?.value) {
      addOnPrice += this.isYearly ? 10 : 1;
    }
    if (this.addOnForm.get('largerStorage')?.value) {
      addOnPrice += this.isYearly ? 20 : 2;
    }
    if (this.addOnForm.get('customizableProfile')?.value) {
      addOnPrice += this.isYearly ? 30 : 3;
    }
    return addOnPrice;
  }

  setupFormListeners() {
    // Recalculate total price whenever the plan or add-on form changes
    this.planForm.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });

    this.addOnForm.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });
  }

  toggleYearly() {
    this.isYearly = !this.isYearly;
    this.planForm.patchValue({
      isYearly: this.isYearly,
    });

    // Update the planForm
    const chosenPlan = this.planForm.get('chosenPlan')?.value;
    if (chosenPlan && chosenPlan.name) {
      const plan = plans.find((p) => p.name === chosenPlan.name);
      if (plan) {
        const newPrice = this.isYearly
          ? plan.monthlyPrice * 10
          : plan.monthlyPrice;
        this.planForm.patchValue({
          chosenPlan: {
            ...chosenPlan,
            price: newPrice,
          },
        });
      }
    }

    // Recalculate prices
    this.calculateTotalPrice();
  }
}
