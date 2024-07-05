import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  @Input() personalForm: FormGroup = this.builder.group({});

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {}

  get fullname() {
    return this.personalForm.get('fullname');
  }

  get email() {
    return this.personalForm.get('email');
  }
  get phone() {
    return this.personalForm.get('phone');
  }

  validateForm() {
    this.personalForm.markAllAsTouched();
  }
}
