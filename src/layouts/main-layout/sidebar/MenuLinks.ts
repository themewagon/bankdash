import { SvgIconProps } from '@mui/material';
import CreditCardIcon from 'components/icons/menu-icons/CreditCardIcon';
import HomeIcon from 'components/icons/menu-icons/HomeIcon';
import InvestIcon from 'components/icons/menu-icons/InvestIcon';
import LoanIcon from 'components/icons/menu-icons/LoanIcon';
import ServiceIcon from 'components/icons/menu-icons/ServiceIcon';
import SettingsIcon from 'components/icons/menu-icons/SettingsIcon';
import TransferIcon from 'components/icons/menu-icons/TransferIcon';
import UserIcon from 'components/icons/menu-icons/UserIcon';

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
    icon: TransferIcon,
  },
  {
    id: 3,
    title: linkEnum.Accounts,
    link: '/accounts',
    icon: UserIcon,
  },
  {
    id: 4,
    title: linkEnum.Investments,
    link: '/investments',
    icon: InvestIcon,
  },
  {
    id: 5,
    title: linkEnum.Credit,
    link: '/credit-cards',
    icon: CreditCardIcon,
  },
  {
    id: 6,
    title: linkEnum.Loans,
    link: '/loans',
    icon: LoanIcon,
  },
  {
    id: 7,
    title: linkEnum.Services,
    link: '#!',
    icon: ServiceIcon,
  },
  {
    id: 8,
    title: linkEnum.Setting,
    link: '#!',
    icon: SettingsIcon,
  },
];
