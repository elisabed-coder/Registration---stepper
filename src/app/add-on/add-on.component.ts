import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.scss'],
})
export class AddOnComponent implements OnInit {
  @Input() addOn!: FormGroup;
  @Input() isYearly: boolean = false;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    if (!this.addOn.contains('price')) {
      this.addOn.addControl('price', this.builder.control(0));
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
    const selectedAddOns = {
      onlineService: this.addOn.get('onlineService')?.value,
      largerStorage: this.addOn.get('largerStorage')?.value,
      customizableProfile: this.addOn.get('customizableProfile')?.value,
    };
    let price = 0;
    if (selectedAddOns.onlineService) {
      price += this.getAddonPrice('onlineService');
    }
    if (selectedAddOns.largerStorage) {
      price += this.getAddonPrice('largerStorage');
    }
    if (selectedAddOns.customizableProfile) {
      price += this.getAddonPrice('customizableProfile');
    }
    this.addOn.get('price')?.setValue(price); // Set price form control value
    return `$${price}/${this.isYearly ? 'yr' : 'mo'}`;
  }
}
