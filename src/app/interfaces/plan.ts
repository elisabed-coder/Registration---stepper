export interface Plan {
  id: number;
  name: string;
  icon: string;
  monthlyPrice: number;
}

export const plans: Plan[] = [
  {
    id: 1,
    name: 'Arcade',
    icon: '/assets/images/icon-arcade.svg',
    monthlyPrice: 9,
  },
  {
    id: 2,
    name: 'Advanced',
    icon: '/assets/images/icon-advanced.svg',
    monthlyPrice: 12,
  },
  {
    id: 3,
    name: 'Pro',
    icon: '/assets/images/icon-pro.svg',
    monthlyPrice: 15,
  },
];
