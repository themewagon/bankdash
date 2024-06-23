import { Card, List, ListItem, Stack, Typography } from '@mui/material';
import CoinIcon from 'components/icons/card-icons/CoinIcon';
import CreditCardIcon from 'components/icons/card-icons/CreditCardIcon';
import PaypalIcon from 'components/icons/card-icons/PaypalIcon';

/* ---------------------------- Transaction Data ---------------------------- */
const transactions = [
  {
    id: 1,
    icon: <CreditCardIcon />,
    bgcolor: 'warning.lighter',
    color: 'yellow',
    title: 'Deposit from my Card',
    date: '25 January 2021',
    amount: '-$500',
    amountColor: 'error.main',
  },
  {
    id: 2,
    icon: <PaypalIcon />,
    bgcolor: 'primary.lighter',
    color: 'primary.main',
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '+$500',
    amountColor: 'success.main',
  },
  {
    id: 3,
    icon: <CoinIcon />,
    bgcolor: 'info.lighter',
    color: 'cyan',
    title: 'Jemi Wilson',
    date: '25 January 2021',
    amount: '+$500',
    amountColor: 'success.main',
  },
];
/* -------------------------------------------------------------------------- */
const TransactionCard = () => {
  return (
    <Card>
      <List sx={{ color: 'primary.main', '& > *:not(:last-child)': { mb: 2.5 }, p: 3 }}>
        {transactions.map((transaction) => (
          <ListItem key={transaction.id} sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Stack
              direction="row"
              sx={{
                width: 55,
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: transaction.bgcolor,
                color: transaction.color,
                borderRadius: '50%',
              }}
            >
              {transaction.icon}
            </Stack>
            <Stack
              direction="row"
              sx={{
                flexGrow: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Stack gap={1}>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                  {transaction.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'secondary.light' }}>
                  {transaction.date}
                </Typography>
              </Stack>
              <Typography variant="body1" sx={{ color: transaction.amountColor }}>
                {transaction.amount}
              </Typography>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default TransactionCard;
