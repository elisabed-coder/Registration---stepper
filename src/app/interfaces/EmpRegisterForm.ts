import { addOn } from './addOn';

export interface EmpRegisterForm {
  personalInfo: {
    fullname: string;
    email: string;
    phone: string;
  };
  plan: {
    chosenPlan: string;
    isYearly: boolean;
  };
  address: {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
    addOns: addOn[];
  };
}
