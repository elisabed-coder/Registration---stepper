import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.scss'],
})
export class AddOnComponent implements OnInit {
  @Input() addressForm!: FormGroup;
  @Input() isYearly: boolean = false;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.addressForm.contains('price')) {
      this.addressForm.addControl('price', this.builder.control(0));
    }
  }

  getAddonPrice(addon: string): number {
    switch (addon) {
      case 'onlineService':
        return this.isYearly ? 10 : 1;
      case 'largerStorage':
        return this.isYearly ? 20 : 2;
      case 'customizableProfile':
        return this.isYearly ? 30 : 3;
      default:
        return 0;
    }
  }

  getThePrice() {
    const selectedAddOns = this.addressForm.value;
    let price = 0; // Calculate price
    if (selectedAddOns.onlineService) {
      price += this.getAddonPrice('onlineService');
    }
    if (selectedAddOns.largerStorage) {
      price += this.getAddonPrice('largerStorage');
    }
    if (selectedAddOns.customizableProfile) {
      price += this.getAddonPrice('customizableProfile');
    }
    // this.addressForm.get('price')?.setValue(price); // Set price form control value
    return `$${price}/${this.isYearly ? 'yr' : 'mo'}`;
  }
}
