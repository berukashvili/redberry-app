import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, Container } from '@chakra-ui/react';
import customTheme from 'customTheme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <Container maxW={['', '900px']}>
        <App />
      </Container>
    </ChakraProvider>
  </StrictMode>
);
