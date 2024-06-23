import { Link, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { menuLinks, MenuLinkType } from 'layouts/main-layout/sidebar/MenuLinks';
import { useLocation } from 'react-router-dom';
interface MenuListProps {
  menuItem: MenuLinkType;
}
const MenuListItem = ({ menuItem }: MenuListProps) => {
  const { icon: Icon } = menuItem;
  const itemIcon = Icon ? <Icon /> : null;
  const location = useLocation();

  // check if list item is active
  const isActive =
    menuItem.title === menuLinks.find((item) => item.link === location.pathname)?.title;

  return (
    <ListItem
      key={menuItem.id}
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          bgcolor: isActive ? 'primary.main' : 'transparent',
          top: 0,
          bottom: 0,
          left: 0,
          width: 6,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          transition: 'background-color 0.5s ease',
        },
      }}
    >
      <Link
        href={menuItem.link}
        sx={{
          py: 1.5,
          px: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 3.125,
          flex: 1,
          color: isActive ? 'primary.main' : 'action.disabled',
          transition: 'color 0.5s ease',
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 'auto',
            color: isActive ? 'primary.main' : 'action.disabled',
          }}
        >
          {itemIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
              {menuItem.title}
            </Typography>
          }
        />
      </Link>
    </ListItem>
  );
};

export default MenuListItem;
