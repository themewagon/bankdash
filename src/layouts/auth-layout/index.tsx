import { Box, Link, Toolbar, Typography } from '@mui/material';
import Image from 'components/base/Image';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Box
      position="relative"
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.default',
        placeItems: 'center',
        flexGrow: 1,
        width: 1,
        justifyContent: 'center',
        background: 'linear-gradient(to right bottom, #f9fafb, #E6EFF5)',
        p: 4,
      }}
    >
      <Toolbar
        sx={{
          gap: 1,
          minHeight: 20,
          position: 'fixed',
          top: { xs: 10, sm: 12, md: 16 },
          left: { xs: 10, sm: 12, md: 16 },
        }}
      >
        <Link href="/" sx={{ display: 'flex', gap: 2 }}>
          <Image src="/bankdash.svg" alt="Logo" sx={{ width: 36 }} />
          <Typography variant="h2">Bankdash.</Typography>
        </Link>
      </Toolbar>
      <Box
        sx={{
          mt: { xs: 5, sm: 4, md: 3 },
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthLayout;
