import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import SearchInput from 'layouts/main-layout/navbar/SearchInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainNavbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'white', px: 2, py: 1 }}>
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}
        >
          <IconButton
            onClick={() => setShowMenu(true)}
            sx={{ display: { md: 'none' }, color: 'black', width: 40, height: 40 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h1" sx={{ color: 'primary.main', flex: 1 }}>
            Overview
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, width: 250 }}>
              <SearchInput /> search input
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" onClick={() => navigate('/settings')}>
                {/* <SettingOIcon /> */}Icon setting menu
              </Button>
            </Box>
            {/* <NotifButton />
              <ProfileButton /> */}
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' }, width: '100%' }}>
            {/* <SearchInput handleSubmit={handleSubmit} fullWidth /> */} search
          </Box>
        </Toolbar>
      </AppBar>
      {/* <MobileSidebar show={showMenu} handleClose={() => setShowMenu(false)} /> */}
    </>
  );
};

export default MainNavbar;
