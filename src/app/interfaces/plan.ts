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
    icon: '/assets/images/icon-arcade.svg',
    monthlyPrice: 9,
    bgColor: '#FFA500',
  },
  {
    id: 2,
    name: 'Advanced',
    icon: '/assets/images/icon-advanced.svg',
    monthlyPrice: 12,
    bgColor: '#c3195d',
  },
  {
    id: 3,
    name: 'Pro',
    icon: '/assets/images/icon-pro.svg',
    monthlyPrice: 15,
    bgColor: '#0000FF',
  },
];
