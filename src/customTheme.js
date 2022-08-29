import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    primary: '#fff',
    secondary: '#62A1EB',
    'secondary-blue': '#4386A9',
    'secondary-bg': '#EAFAFF',
  },

  styles: {
    global: {
      body: {
        color: 'black',
        backgroundColor: 'primary',
      },

      option: {
        backgroundColor: 'white',
      },
    },
  },

  fonts: {
    heading: `'HelveticaNeue', sans-serif`,
    body: `'HelveticaNeue', sans-serif`,
  },

  breakpoints: {
    sm: '390px',
    md: '1920px',
  },
});

export default customTheme;
