import { Card, List, ListItem, Stack, Typography } from '@mui/material';
import CardContainer from 'components/common/CardContainter';
import CoinIcon from 'components/icons/card-icons/CoinIcon';
import CreditCardIcon from 'components/icons/card-icons/CreditCardIcon';
import PaypalIcon from 'components/icons/card-icons/PaypalIcon';

/* ---------------------------- Transaction Data ---------------------------- */
const transactions = [
  {
    id: 1,
    icon: CreditCardIcon,
    bgcolor: 'warning.light',
    title: 'Deposit from my Card',
    date: '25 January 2021',
    amount: '-$500',
    amountColor: 'error.main',
  },
  {
    id: 2,
    icon: PaypalIcon,
    bgcolor: 'neutral.light',
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '+$500',
    amountColor: 'success.main',
  },
  {
    id: 3,
    icon: CoinIcon,
    bgcolor: 'success.lighter',
    title: 'Jemi Wilson',
    date: '25 January 2021',
    amount: '+$500',
    amountColor: 'success.main',
  },
];
/* -------------------------------------------------------------------------- */

const RecentTransactions = () => {
  return (
    <CardContainer title="Recent Transactions">
      <Card sx={{ p: { xs: 0.5, xl: 1 } }}>
        <List disablePadding sx={{ color: 'primary.main', '& > *:not(:last-child)': { mb: 2.5 } }}>
          {transactions.map(
            ({ id, icon: IconComponent, bgcolor, title, date, amount, amountColor }) => (
              <ListItem
                key={id}
                sx={{ display: 'flex', alignItems: 'center', gap: 3 }}
                disablePadding
              >
                <Stack
                  direction="row"
                  sx={{
                    width: 55,
                    height: 55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: bgcolor,
                    borderRadius: '50%',
                  }}
                >
                  <IconComponent sx={{ mb: 0.75 }} />
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
                    <Typography
                      sx={{
                        color: 'primary.darker',
                        fontSize: { xs: 'subtitle1.fontSize', md: 'body2.fontSize' },
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'primary.light',
                        fontSize: {
                          xs: 'caption.fontSize',
                          sm: 'caption.fontSize',
                          md: 'body1.fontSize',
                        },
                      }}
                    >
                      {date}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: amountColor,
                      fontSize: {
                        xs: 'caption.fontSize',
                        sm: 'button.fontSize',
                        md: 'body1.fontSize',
                      },
                    }}
                  >
                    {amount}
                  </Typography>
                </Stack>
              </ListItem>
            ),
          )}
        </List>
      </Card>
    </CardContainer>
  );
};

export default RecentTransactions;