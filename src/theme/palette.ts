import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import { blue, green, grey, purple, red, yellow } from './colors';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
  interface Palette {
    neutral: PaletteColor;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

const palette: PaletteOptions = {
  action: {
    active: grey[500],
    hover: grey[50],
    selected: grey[100],
    disabled: grey[400],
    disabledBackground: grey[200],
    focus: grey[300],
    hoverOpacity: 0.05,
  },
  background: { paper: grey[50] },
  neutral: {
    light: blue[100],
    main: grey[600],
    dark: grey[800],
    contrastText: '#ffffff',
  },
  primary: {
    lighter: blue[200],
    light: blue[300],
    main: blue[500],
    dark: blue[800],
    darker: blue[900],
  },
  secondary: {
    lighter: purple[100],
    light: purple[50],
    main: purple[800],
    dark: purple[700],
    darker: purple[900],
  },
  error: { main: red[500] },
  warning: {
    lighter: yellow[50],
    light: yellow[100],
    main: yellow[500],
    dark: yellow[700],
    darker: yellow[900],
    contrastText: '#ffffff',
  },
  success: {
    lighter: green[50],
    main: green[500],
  },

  grey,
  text: {
    primary: blue[900],
    secondary: blue[200],
    disabled: blue[50],
  },
  divider: grey[100],
};

export default palette;
