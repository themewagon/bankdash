import { Box, List, Stack, Typography } from '@mui/material';
import { menuLinks } from 'layouts/main-layout/sidebar/MenuLinks';
import MenuListItem from 'layouts/main-layout/sidebar/MenuListItem';
const Sidebar = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        gap: 2,
        py: 3.5,
        width: 300,
        borderRight: '1px solid',
        borderColor: '#E6EFF5',
      }}
    >
      <Stack justifyContent="center" sx={{ flexDirection: 'row', px: 3, gap: 1 }}>
        <img src="/bankdash.svg" alt="Logo" style={{ width: 36 }} />
        <Typography variant="h2">Bankdash.</Typography>
      </Stack>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {menuLinks.map((menu) => (
          <MenuListItem menuItem={menu} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
