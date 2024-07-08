import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  @Input() addressForm!: FormGroup;
  @Input() planForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
