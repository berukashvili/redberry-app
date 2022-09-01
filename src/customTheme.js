import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    primary: '#fff',
    secondary: '#62A1EB',
    'secondary-blue': '#4386A9',
    'secondary-bg': '#EAFAFF',
    'bg-gray': '#4A4A4A',
    'bg-gray-secondary': '#D9D9D9',
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
  components: {
    Button: { baseStyle: { _focus: { boxShadow: 'none' } } },
    Button: { baseStyle: { _hover: { backgroundColor: 'none' } } },
    Link: { baseStyle: { _focus: { boxShadow: 'none' } } },
  },
});

export default customTheme;
