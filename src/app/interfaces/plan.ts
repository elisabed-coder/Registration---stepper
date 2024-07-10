export interface Plan {
  id: number;
  name: string;
  icon: string;
  monthlyPrice: number;
  bgColor: string;
}

export const plans: Plan[] = [
  {
    id: 1,
    name: 'Arcade',
    icon: 'fa fa-neuter',
    monthlyPrice: 9,
    bgColor: '#FFA500',
  },
  {
    id: 2,
    name: 'Advanced',
    icon: 'fa fa-gamepad',
    monthlyPrice: 12,
    bgColor: '#c3195d',
  },
  {
    id: 3,
    name: 'Pro',
    icon: 'fa fa-user',
    monthlyPrice: 15,
    bgColor: '#0000FF',
  },
];
