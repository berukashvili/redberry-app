import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    primary: '#fff',
    secondary: '#62A1EB',
  },

  styles: {
    global: {
      body: {
        backgroundColor: 'primary',
      },
    },
  },

  fonts: {
    heading: `'HelveticaNeue', sans-serif`,
    body: `'HelveticaNeue', sans-serif`,
  },
});

export default customTheme;
