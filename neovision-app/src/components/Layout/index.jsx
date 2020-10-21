import React from 'react';

import Landing from '../Landing';
import Content from '../Content';
import Register from '../Register';
import Footer from '../Footer';

import { 
  Container,
  Wrapper
 } from './styles';

function Layout() {
  return (
    <Container>
      <Wrapper>
        <Landing />
        <Content />
        <Register />
        <Footer /> 
      </Wrapper>
    </Container>
  );
}

export default Layout;