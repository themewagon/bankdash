import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const FilledInputComponent: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 2.5,
      '& fieldset': {
        border: 'none',
      },
      '&:before, &:after': {
        display: 'none',
      },
      backgroundColor: theme.palette.background.paper,
      '&.Mui-focused, &:hover': {
        backgroundColor: theme.palette.background.paper,
      },
      '&:-webkit-autofill': { borderRadius: theme.shape.borderRadius * 2.5 },
    }),
    input: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      height: pxToRem(18),
      lineHeight: pxToRem(18),
      paddingTop: theme.spacing(2),
      paddingRight: theme.spacing(1.5),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(3),
    }),
    inputAdornedStart: ({ theme }) => ({ paddingLeft: theme.spacing(0) }),
  },
};

export default FilledInputComponent;
