import { Box, Typography } from '@mui/material';
import TransactionCard from 'components/sections/dashboard/transactions/TransactionCard';

const RecentTransactions = () => {
  return (
    <Box sx={{ overflow: 'auto' }}>
      <Box sx={{ pt: 3, pb: 2.5 }}>
        <Typography variant="h3">Recent Transaction</Typography>
      </Box>
      <TransactionCard />
    </Box>
  );
};

export default RecentTransactions;
