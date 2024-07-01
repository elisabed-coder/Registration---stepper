import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Plan } from '../interfaces/plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  @Input() planForm!: FormGroup;
  plans: Plan[] = [
    { name: 'Arcade', icon: 'fa fa-neuter', price: '$9/mo' },
    { name: 'Advanced', icon: 'fa fa-gamepad', price: '$12/mo' },
    { name: 'Pro', icon: 'fa-regular fa-vr-cardboard', price: '$15/mo' },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    if (!this.planForm) {
      this.planForm = this.fb.group({});
    }
    if (!this.planForm.get('chosenPlan')) {
      this.planForm.addControl(
        'chosenPlan',
        this.fb.control('', Validators.required)
      );
    }
  }

  selectPlan(plan: string): void {
    this.planForm.get('chosenPlan')?.setValue(plan);
  }

  trackByFn(index: number, item: Plan): string {
    return item.name;
  }
}
