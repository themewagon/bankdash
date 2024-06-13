import { SvgIconProps } from '@mui/material';
import HomeIcon from 'components/icons/menu-icons/HomeIcon';

export enum linkEnum {
  Dashboard = 'dashboard',
  Transactions = 'transactions',
  Accounts = 'accounts',
  Investments = 'investments',
  Credit = 'credit-cards',
  Loans = 'loans',
  Services = 'Services',
  Setting = 'Setting',
}

export interface MenuLinkType {
  id: number;
  title: string;
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
}
export const menuLinks: MenuLinkType[] = [
  {
    id: 1,
    title: linkEnum.Dashboard,
    link: '/',
    icon: HomeIcon,
  },
  {
    id: 2,
    title: linkEnum.Transactions,
    link: '/transactions',
    icon: HomeIcon,
  },
  {
    id: 3,
    title: linkEnum.Accounts,
    link: '/accounts',
    icon: HomeIcon,
  },
  {
    id: 4,
    title: linkEnum.Investments,
    link: '/investments',
    icon: HomeIcon,
  },
  {
    id: 5,
    title: linkEnum.Credit,
    link: '/credit-cards',
    icon: HomeIcon,
  },
  {
    id: 6,
    title: linkEnum.Loans,
    link: '/loans',
    icon: HomeIcon,
  },
  {
    id: 7,
    title: linkEnum.Services,
    link: '#!',
    icon: HomeIcon,
  },
  {
    id: 8,
    title: linkEnum.Setting,
    link: '#!',
    icon: HomeIcon,
  },
];
