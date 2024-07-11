import { Box, Stack, Typography } from '@mui/material';
import CreditCard, { CreditCardData } from 'components/sections/dashboard/creditCards/CreditCard';
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
    <Box sx={{ overflow: 'auto' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pt: 3, pb: 2.5 }}
      >
        <Typography
          sx={{ typography: { xs: 'body2', md: 'h6', xl: 'h3' }, fontWeight: '600 !important' }}
        >
          My Cards
        </Typography>
        <Typography
          variant="h5"
          sx={{
            typography: { xs: 'caption', md: 'body1', xl: 'h5' },
            fontWeight: '600 !important',
            pr: 1,
          }}
        >
          See All
        </Typography>
      </Stack>
      <SimpleBar style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <Stack direction="row" justifyContent="space-between" gap={4} sx={{ minWidth: '800px' }}>
          {cardData.map((card) => (
            <CreditCard key={card.id} theme={card.theme} cardData={card.data} />
          ))}
        </Stack>
      </SimpleBar>
    </Box>
  );
};

export default MyCards;
