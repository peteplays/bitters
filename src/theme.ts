import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    background: {
      default: '#1896D5'
    },
    primary: {
      main: '#069',
    },
    secondary: {
      main: '#C7B65C'
    }
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       html: {
  //         height:  '100%',
  //       },
  //       body: {
  //         height:  '100%',
  //       },
  //     },
  //   },
  // },
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  fontFamily: [
    'Josefin Slab',
    ...[theme.typography.fontFamily],
  ].join(','),
}

export default theme;
