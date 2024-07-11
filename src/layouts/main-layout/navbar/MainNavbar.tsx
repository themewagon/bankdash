import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import NotificationDropdown from 'layouts/main-layout/navbar/NotificationDropdown';
import ProfileDropdown from 'layouts/main-layout/navbar/ProfileDropdown';
import SearchInput from 'layouts/main-layout/navbar/SearchInput';
import SettingsDropdown from 'layouts/main-layout/navbar/SettingsDropdown';
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
            gap: { xs: 0, lg: 2 },
            mr: { xs: 1.25, md: 0 },
          }}
        >
          <IconButton onClick={onDrawerToggle} sx={{ display: { md: 'none' } }}>
            <IconifyIcon icon="mingcute:menu-line" color="primary.darker" />
          </IconButton>
          <Typography
            sx={{
              typography: { xs: 'h3', md: 'h2', xl: 'h1' },
              color: 'primary.darker',
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
              textTransform: 'capitalize',
            }}
          >
            {routeName}
          </Typography>
          <Stack direction="row" sx={{ alignItems: 'center', gap: { xs: 2.5, xl: 3.75 } }}>
            <Box sx={{ display: { xs: 'none', md: 'block', maxWidth: 260 } }}>
              <SearchInput fullWidth={false} size={'medium'} />
            </Box>

            <Stack
              direction="row"
              sx={{ display: { xs: 'none', md: 'flex' }, gap: { xs: 2.5, xl: 3.75 } }}
            >
              <SettingsDropdown />
              <NotificationDropdown />
            </Stack>
            <ProfileDropdown />
          </Stack>
        </Toolbar>
        <Box sx={{ display: { xs: 'block', md: 'none' }, px: 3.15, mt: 2.5 }}>
          <SearchInput fullWidth={true} size={'small'} />
        </Box>
      </AppBar>
    </>
  );
};

export default MainNavbar;
