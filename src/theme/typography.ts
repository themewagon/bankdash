import { TypographyOptions } from '@mui/material/styles/createTypography';
import pxToRem from 'theme/functions/pxToRem';

const typography: TypographyOptions = {
  fontFamily: ['Inter', 'sans-serif'].join(','),
  h1: {
    fontWeight: 600,
    fontSize: pxToRem(28), // 28px
    lineHeight: pxToRem(34), // 32px
  },
  h2: {
    fontWeight: 900,
    fontSize: pxToRem(25), // 25px
    lineHeight: pxToRem(32), // 32px
  },
  h3: {
    fontWeight: 600,
    fontSize: pxToRem(20), // 24px
    lineHeight: pxToRem(24), // 24px
  },
  h4: {
    fontWeight: 600,
    fontSize: pxToRem(18), // 18px
  },
  h5: {
    fontWeight: 700,
    fontSize: '1.5rem', // 24px
    lineHeight: 1.15,
  },
  h6: {
    fontWeight: 700,
    fontSize: '1.3125rem', // 21px
    lineHeight: 1.2,
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: '1rem', // 16px
    lineHeight: 1.3,
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: pxToRem(13), // 13px
  },
  body1: {
    fontWeight: 400,
    fontSize: pxToRem(16), // 16px
    lineHeight: 1.5,
  },
  body2: {
    fontWeight: 400,
    fontSize: pxToRem(15), // 15px
    lineHeight: 1.45,
  },
  button: {
    fontWeight: 700,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.286,
    textTransform: 'capitalize',
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75rem', // 12px
    lineHeight: 1.2,
  },
  overline: {
    fontWeight: 400,
    fontSize: '0.75rem', // 12px
    lineHeight: 1.2,
    textTransform: 'uppercase',
  },
};

export default typography;
