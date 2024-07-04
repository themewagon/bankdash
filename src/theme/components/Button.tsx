import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const ButtonComponent: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      '&.Mui-disabled': {
        backgroundColor: theme.palette.action.disabled,
        boxShadow: 'none',
        color: theme.palette.text.disabled,
      },
    }),
    outlined: ({ theme }) => ({
      ...theme.typography.caption,
      fontWeight: theme.typography.fontWeightMedium,
      paddingTop: pxToRem(8),
      paddingBottom: pxToRem(8),
      borderRadius: theme.shape.borderRadius * 12.5,
    }),
    outlinedPrimary: ({ theme }) => ({
      color: theme.palette.primary.darker,
      borderColor: theme.palette.primary.darker,
      '&:hover': {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
        color: theme.palette.action.disabled,
      },
    }),
    sizeMedium: {
      paddingLeft: pxToRem(14),
      paddingRight: pxToRem(14),
    },
    sizeLarge: {
      paddingLeft: pxToRem(24),
      paddingRight: pxToRem(24),
    },
  },
};

export default ButtonComponent;
