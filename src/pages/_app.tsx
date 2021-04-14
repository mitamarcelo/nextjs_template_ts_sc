import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import GlobalStyle from './app.styles';
import Header from '../components/Header';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
