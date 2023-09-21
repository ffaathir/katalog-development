import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import CatalogPage from './src/CatalogPage';
import Form from './src/Form';

export default function App() {
  const theme = extendTheme({
    fonts: {
      heading: 'Roboto, sans-serif',
      body: 'Open Sans, sans-serif',
    },
    colors: {
      primary: {
        50: '#f9e3e3',
        100: '#f4c6c6',
        200: '#ee9a9a',
        300: '#e86d6d',
        400: '#e24141',
        500: '#db1414',
        600: '#c91414',
        700: '#ac1313',
        800: '#900f0f',
        900: '#750c0c',
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/">
            <CatalogPage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
