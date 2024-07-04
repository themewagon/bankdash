import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import 'simplebar-react/dist/simplebar.min.css';
import simplebar from 'theme/styles/simplebar';

const CssBaselineComponent: Components<Omit<Theme, 'components'>>['MuiCssBaseline'] = {
  defaultProps: {},
  styleOverrides: (theme) => ({
    body: {
      fontVariantLigatures: 'none',
    },
    'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
      {
        WebkitBoxShadow: '0 0 0 30px transparent inset !important',
        transition: 'background-color 5000s ease-in-out 0s',
      },
    ...simplebar(theme),
    // ...echart(),
  }),
};

export default CssBaselineComponent;
