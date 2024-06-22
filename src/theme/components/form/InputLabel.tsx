import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputLabelComponent: Components<Omit<Theme, 'components'>>['MuiInputLabel'] = {
  defaultProps: { shrink: true },
  styleOverrides: {
    root: () => ({
      position: 'relative',
      //   transform: 'translate(0px, 0px) scale(0.75)',
      //   color: theme.palette.text.secondary,
      //   paddingLeft: theme.spacing(0),
      //   paddingBottom: theme.spacing(0.6),
      //   paddingRight: 1,
      //   '& +.MuiInputBase-root': {
      //     marginTop: 0, // Remove Margin Top of The MuiInput right after  a label
      //   },
    }),
    shrink: {
      transform: 'translate(0px, 0px)',
    },
    // outlined: {
    //   transform: 'translate(14px, 16px) scale(1.5)',
    // },
  },
};

export default InputLabelComponent;
