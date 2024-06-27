import { Box, Grid } from '@mui/material';
import WeeklyActivity from 'components/sections/dashboard/activity/WeeklyActivity';
import BalanceHistory from 'components/sections/dashboard/balance/BalanceHistory';

import MyCards from 'components/sections/dashboard/creditCards/MyCards';
import ExpenseStatistics from 'components/sections/dashboard/expense/ExpenseStatistics';
import RecentTransactions from 'components/sections/dashboard/transactions/RecentTransaction';
import QuickTransfer from 'components/sections/dashboard/transfer/QuickTransfer';

const Dashboard = () => {
  return (
    <Box sx={{ overflow: 'auto' }}>
      {/* ------------- Card section ---------------- */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} lg={8} zIndex={1}>
          <MyCards />
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <RecentTransactions />
        </Grid>
      </Grid>

      {/* ------------- Chart section ---------------- */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} lg={8} zIndex={1}>
          <WeeklyActivity />
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <ExpenseStatistics />
        </Grid>
      </Grid>
      {/* ------------- Slider section ---------------- */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={5} lg={4}>
          <QuickTransfer />
        </Grid>
        <Grid item xs={12} lg={8} zIndex={1}>
          <BalanceHistory />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
