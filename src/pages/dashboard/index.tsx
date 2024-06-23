import { Box, Grid } from '@mui/material';
import MyCards from 'components/sections/dashboard/creditCards/MyCards';
import RecentTransactions from 'components/sections/dashboard/transactions/RecentTransaction';

const Dashboard = () => {
  return (
    <Box sx={{ overflow: 'auto' }}>
      {/* /* ------------- Card section ---------------- */}
      <Grid container spacing={4} mb={3}>
        <Grid item xs={12} lg={8} zIndex={1}>
          <MyCards />
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <RecentTransactions />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
