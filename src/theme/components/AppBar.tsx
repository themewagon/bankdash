import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const AppBarComponent: Components<Omit<Theme, 'components'>>['MuiAppBar'] = {
  defaultProps: { elevation: 0 },
  styleOverrides: { root: {} },
};

export default AppBarComponent;
