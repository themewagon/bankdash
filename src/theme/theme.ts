import { createTheme } from '@mui/material';
import AppBarComponent from 'theme/components/AppBar';
import LinkComponent from 'theme/components/Link';
import ListItemComponent from 'theme/components/list/ListItem';
// import type {} from '@mui/x-data-grid/themeAugmentation';
import palette from 'theme/palette';
import typography from 'theme/typography';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiAppBar: AppBarComponent,
    MuiLink: LinkComponent,
    MuiListItem: ListItemComponent,
  },
});
