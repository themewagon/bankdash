import { Box, Stack, Typography } from '@mui/material';
import CreditCard from 'components/sections/dashboard/creditCards/CreditCard';

const MyCards = () => {
  return (
    <Box sx={{ overflow: 'auto' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pt: 3, pb: 2.5 }}
      >
        <Typography variant="h3">My Cards</Typography>
        <Typography variant="h5" sx={{ pr: 1 }}>
          See All
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" gap={4}>
        <CreditCard theme="blue" />
        <CreditCard theme="white" />
      </Stack>
    </Box>
  );
};

export default MyCards;
