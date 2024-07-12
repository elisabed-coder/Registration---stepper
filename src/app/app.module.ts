import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  matStepperAnimations,
  MatStepperModule,
} from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_RADIO_DEFAULT_OPTIONS,
  MatRadioModule,
} from '@angular/material/radio';

import { MatFormFieldModule } from '@angular/material/form-field';
import { StepperComponent } from './stepper/stepper.component';
import { PlanComponent } from './plan/plan.component';
import { AddOnComponent } from './add-on/add-on.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SummaryComponent } from './summary/summary.component';
import { RouterModule } from '@angular/router';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { DoneMessageComponent } from './done-message/done-message.component'; // Ensure this import is present
import { StepperOrientation } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    StepperComponent,
    PlanComponent,
    AddOnComponent,
    SummaryComponent,
    DoneMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    CdkStepperModule,
    RouterModule,
    MatRadioModule,
    MatSlideToggleModule,
    FormsModule,
    MatCheckboxModule,
    MatStepperModule,
  ],
  exports: [CdkStepperModule],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
