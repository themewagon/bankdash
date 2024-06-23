import { createTheme } from '@mui/material';
import AppBarComponent from 'theme/components/AppBar';
import ButtonBaseComponent from 'theme/components/ButtonBase';
import CardComponent from 'theme/components/Card';
import CssBaselineComponent from 'theme/components/CssBaseline';
import DrawerComponent from 'theme/components/Drawer';
import FilledInputComponent from 'theme/components/form/FilledInput';
import InputComponent from 'theme/components/form/Input';
import InputAdornmentComponent from 'theme/components/form/InputAdornment';
import InputBaseComponent from 'theme/components/form/InputBase';
import InputLabelComponent from 'theme/components/form/InputLabel';
import OutlinedInputComponent from 'theme/components/form/OutlinedInput';
import IconButtonComponent from 'theme/components/IconButton';
import LinkComponent from 'theme/components/Link';
import ListItemComponent from 'theme/components/list/ListItem';
import ToolbarComponent from 'theme/components/Toolbar';
// import type {} from '@mui/x-data-grid/themeAugmentation';
import palette from 'theme/palette';
import typography from 'theme/typography';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiAppBar: AppBarComponent,
    MuiButtonBase: ButtonBaseComponent,
    MuiCard: CardComponent,
    MuiCssBaseline: CssBaselineComponent,
    MuiDrawer: DrawerComponent,
    MuiFilledInput: FilledInputComponent,
    MuiIconButton: IconButtonComponent,
    MuiInput: InputComponent,
    MuiInputBase: InputBaseComponent,
    MuiInputLabel: InputLabelComponent,
    MuiInputAdornment: InputAdornmentComponent,
    MuiLink: LinkComponent,
    MuiListItem: ListItemComponent,
    MuiOutlinedInput: OutlinedInputComponent,
    MuiToolbar: ToolbarComponent,
  },
});
