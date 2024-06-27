import { TypographyOptions } from '@mui/material/styles/createTypography';
import pxToRem from 'theme/functions/pxToRem';
declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    fontWeightLighter?: number;
  }
  interface TypographyOptions {
    fontWeightExtraBold?: number;
  }

  interface Typography {
    fontWeightExtraBold: number;
  }
}
const typography: TypographyOptions = {
  fontFamily: ['Inter', 'sans-serif'].join(','),
  //   fontSize: 16,
  h1: {
    fontWeight: 600,
    fontSize: pxToRem(28),
    lineHeight: pxToRem(34),
  },
  h2: {
    fontWeight: 900,
    fontSize: pxToRem(25),
    lineHeight: pxToRem(32),
  },
  h3: {
    fontWeight: 600,
    fontSize: pxToRem(22), // 22px
    lineHeight: 1.22727, // 27px
  },
  h4: {
    fontWeight: 600,
    fontSize: pxToRem(20), // 20px
    lineHeight: 1.2, // 24px
  },
  h5: {
    fontWeight: 600,
    fontSize: pxToRem(17), // 17px
    lineHeight: 1.2353, // 21px
  },
  h6: {
    fontWeight: 500,
    fontSize: pxToRem(18), // 18px
    lineHeight: 1.2222, //22px
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.3,
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: pxToRem(13),
  },
  body1: {
    fontWeight: 400,
    fontSize: pxToRem(15), // 15px
    lineHeight: 1.2, // 18px
  },
  body2: {
    fontWeight: 500,
    fontSize: '16px', // 16px
    lineHeight: 1.1875, // 19px
  },
  button: {
    fontWeight: 500,
    fontSize: '16px', // 16px
    lineHeight: 1.1875, // 19px
    textTransform: 'capitalize',
  },
  caption: {
    fontWeight: 400,
    fontSize: pxToRem(12), // 12px
    lineHeight: 1.16666, // 14px
  },
  overline: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.2,
    textTransform: 'uppercase',
  },
};

export default typography;
