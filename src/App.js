import React from 'react';
import { ChakraProvider, theme, Text } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Text>App</Text>
    </ChakraProvider>
  );
}

export default App;
