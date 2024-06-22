import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import ProfileImage from 'assets/avatar.jpg';
import IconifyIcon from 'components/base/IconifyIcon';
import SearchInput from 'layouts/main-layout/navbar/SearchInput';
interface NavbarProps {
  onDrawerToggle: () => void;
}
const MainNavbar = ({ onDrawerToggle }: NavbarProps) => {
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'white' }}>
        <Toolbar
          sx={{
            flexWrap: 'wrap',
          }}
        >
          <IconButton onClick={onDrawerToggle} sx={{ display: { md: 'none' }, mr: 2 }}>
            <IconifyIcon icon="mingcute:menu-line" color="secondary.main" />
          </IconButton>
          <Typography
            sx={{
              typography: { xs: 'h3', md: 'h1' },
              color: 'secondary.main',
              flex: 1,
            }}
          >
            Overview
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <SearchInput />
            </Box>
            <div>
              <IconButton sx={{ bgcolor: 'background.paper' }}>
                <IconifyIcon icon="solar:settings-linear" color="text.secondary" />
              </IconButton>
            </div>
            <IconButton sx={{ p: 0, position: 'relative' }}>
              <Avatar
                alt="Avatar"
                src={ProfileImage}
                slotProps={{
                  img: {
                    style: {
                      objectFit: 'cover',
                      position: 'absolute',
                      top: '70%',
                      left: '30%',
                      transform: 'translate(-50%, -50%) scale(1.5)',
                      width: 60,
                      height: 60,
                    },
                  },
                }}
                sx={{ width: 60, height: 60 }}
              />
            </IconButton>

            {/* <NotifButton />
              <ProfileButton /> */}
          </Box>
        </Toolbar>
      </AppBar>
      {/* <MobileSidebar show={showMenu} handleClose={() => setShowMenu(false)} /> */}
    </>
  );
};

export default MainNavbar;
