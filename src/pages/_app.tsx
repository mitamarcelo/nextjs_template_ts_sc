import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import Header from 'components/Header';

import GlobalStyle from './app.styles';

const App = ({ Component, pageProps }: AppProps) => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  </StylesProvider>
);

export default App;
