import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent extends PersonalInfoComponent {}
