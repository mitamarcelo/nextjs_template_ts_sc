import React from 'react';

import Head from 'next/head';
import { Container } from './Home.styles';

const Home = () => (
  <>
    <Head>
      <title>Nextjs with typescript and styled components</title>
    </Head>
    <Container>
      <h1>This is HomePage from my template</h1>
    </Container>
  </>
);

export default Home;
