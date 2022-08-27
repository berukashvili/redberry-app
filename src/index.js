import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react';
import customTheme from 'customTheme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
