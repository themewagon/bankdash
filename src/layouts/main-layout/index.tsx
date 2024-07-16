import { Box, Stack } from '@mui/material';
import MainNavbar from 'layouts/main-layout/appbar/Appbar';
import Footer from 'layouts/main-layout/footer/Footer';
import MobileSidebar from 'layouts/main-layout/sidebar/MobileSidebar';
import Sidebar from 'layouts/main-layout/sidebar/Sidebar';
import { PropsWithChildren, useState } from 'react';

const drawerWidth = { lg: 250, md: 240, sm: 230 };

const MainLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '100vh', width: 1 }}>
        <Sidebar drawerWidth={drawerWidth} />
        <MobileSidebar
          onDrawerClose={handleDrawerClose}
          onDrawerTransitionEnd={handleDrawerTransitionEnd}
          mobileOpen={mobileOpen}
          drawerWidth={drawerWidth.lg}
        />
        <Stack
          sx={{
            width: {
              xs: 1,
              md: 'auto',
            },
            flexGrow: 1,
            overflow: 'hidden',
          }}
        >
          <MainNavbar onDrawerToggle={handleDrawerToggle} />
          <Stack
            sx={{
              backgroundColor: { xs: 'common.white', md: 'background.paper' },
              //   backgroundColor: 'background.paper',
              px: { xs: 3.15, md: 5, xl: 7 },
              flex: 1,
              gap: 1,
            }}
          >
            {children}
            <Footer />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default MainLayout;
