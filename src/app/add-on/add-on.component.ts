import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.scss'],
})
export class AddOnComponent implements OnInit {
  @Input() addressForm: FormGroup = this.builder.group({});

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {}
}
