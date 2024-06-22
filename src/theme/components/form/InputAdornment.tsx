import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputAdornment: Components<Omit<Theme, 'components'>>['MuiInputAdornment'] = {
  defaultProps: { variant: 'standard' },
  styleOverrides: {
    root: ({ theme }) => ({
      '& .iconify': {
        flexShrink: 0,
        fontSize: theme.typography.pxToRem(20),
      },
      marginRight: theme.spacing(0.5),
      marginLeft: theme.spacing(0.5),
    }),
  },
};

export default InputAdornment;
