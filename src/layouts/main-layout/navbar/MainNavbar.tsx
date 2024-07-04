import { AppBar, Avatar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import ProfileImage from 'assets/avatar.jpg';
import IconifyIcon from 'components/base/IconifyIcon';
import SearchInput from 'layouts/main-layout/navbar/SearchInput';
import { useLocation } from 'react-router-dom';
interface NavbarProps {
  onDrawerToggle: () => void;
}
const MainNavbar = ({ onDrawerToggle }: NavbarProps) => {
  const location = useLocation();

  // Extract the route name from the pathname
  const pathSegments = location.pathname.split('/').filter((segment) => segment.trim() !== '');
  const routeName = pathSegments.length > 0 ? pathSegments.pop() : 'Overview';

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'white' }}>
        <Toolbar
          sx={{
            flexWrap: 'wrap',
          }}
        >
          <IconButton onClick={onDrawerToggle} sx={{ display: { md: 'none' }, mr: 2 }}>
            <IconifyIcon icon="mingcute:menu-line" color="primary.darker" />
          </IconButton>
          <Typography
            sx={{
              typography: { xs: 'h3', md: 'h1' },
              color: 'primary.darker',
              flex: 1,
            }}
          >
            {routeName}
          </Typography>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 4 }}>
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <SearchInput />
            </Box>

            <IconButton sx={{ bgcolor: 'background.paper' }}>
              <IconifyIcon icon="lucide:settings" color="text.secondary" />
            </IconButton>

            <IconButton sx={{ bgcolor: 'background.paper' }}>
              <IconifyIcon icon="lucide:bell-dot" color="error.main" />
            </IconButton>

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
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainNavbar;
