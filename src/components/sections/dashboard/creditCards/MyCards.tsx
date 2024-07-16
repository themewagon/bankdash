import { Link, Stack, Typography } from '@mui/material';
import CreditCard, { CreditCardData } from 'components/sections/dashboard/creditCards/CreditCard';
import { Fragment } from 'react/jsx-runtime';
import SimpleBar from 'simplebar-react';

/* ---------------------------- Credit Card Data----------------------------- */
interface CardData {
  theme: 'blue' | 'white';
  data: CreditCardData;
  id: number;
}
const cardData: CardData[] = [
  {
    id: 1,
    theme: 'blue',
    data: {
      balance: '5756',
      cardHolder: 'Eddy Cusuma',
      validThru: '12/22',
      cardNumber: '3778 **** **** 1234',
    },
  },
  {
    id: 2,
    theme: 'white',
    data: {
      balance: '3200',
      cardHolder: 'Jane Doe',
      validThru: '01/24',
      cardNumber: '1234 **** **** 5678',
    },
  },
];

const MyCards = () => {
  return (
    <Fragment>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pt: 3, pb: 2.5 }}
      >
        <Typography
          sx={{
            fontSize: { xs: 'body2.fontSize', md: 'h6.fontSize', xl: 'h3.fontSize' },
            fontWeight: 600,
          }}
        >
          My Cards
        </Typography>
        <Link
          variant="h5"
          href="#!"
          sx={{
            fontSize: { xs: 'caption.fontSize', md: 'body1.fontSize', xl: 'h5.fontSize' },
            fontWeight: 600,
            pr: 1,
          }}
        >
          See All
        </Link>
      </Stack>
      <SimpleBar style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <Stack direction="row" justifyContent="space-between" gap={4} sx={{ minWidth: 800 }}>
          {cardData.map((card) => (
            <CreditCard key={card.id} theme={card.theme} cardData={card.data} />
          ))}
        </Stack>
      </SimpleBar>
    </Fragment>
  );
};

export default MyCards;
