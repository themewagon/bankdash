import { Box, Stack, Typography } from '@mui/material';
import CreditCard from 'components/sections/dashboard/creditCards/CreditCard';
import SimpleBar from 'simplebar-react';

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
      <SimpleBar style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <Stack direction="row" justifyContent="space-between" gap={4} sx={{ minWidth: '800px' }}>
          <CreditCard theme="blue" />
          <CreditCard theme="white" />
        </Stack>
      </SimpleBar>
    </Box>
  );
};

export default MyCards;
