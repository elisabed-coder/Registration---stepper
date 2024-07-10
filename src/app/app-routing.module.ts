import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import { plans } from './interfaces/plan';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

const routes: Routes = [
  { path: 'plan', component: PlanComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
