import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const OutlinedInputComponent: Components<Omit<Theme, 'components'>>['MuiOutlinedInput'] = {
  defaultProps: {
    notched: false,
  },
  styleOverrides: {},
};

export default OutlinedInputComponent;
