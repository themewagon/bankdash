import { Box, Stack } from '@mui/material';
import MainNavbar from 'layouts/main-layout/navbar/MainNavbar';
import Sidebar from 'layouts/main-layout/sidebar/Sidebar';
import { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '100vh', width: 1 }}>
        <Sidebar />
        {/* <Box sx={{ flex: 1 }}>{children}</Box> */}
        <Stack
          sx={{
            width: {
              xs: 1,
              md: 'calc(100% - 300px)',
            },
          }}
        >
          <MainNavbar />
          <Stack
            sx={{
              backgroundColor: 'background.paper',
              p: 7,
              minHeight: 'calc(100vh - 100px)',
              flex: 1,
              gap: 6,
            }}
          >
            {children}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default MainLayout;
