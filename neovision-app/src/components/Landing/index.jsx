import React from 'react';

import Navbar from '../Navbar'

import landing from '../../styles/Images/landing.png'

import { 
  Container,
  Content, 
  Text
 } from './styles';

function Landing() {
  return (
    <Container>
      <Navbar />
      <Content>
        <img src={landing} alt="landingImage"/>
        <Text>
          <h3>Reconhecimento de imagem com</h3><hr />
          <h2><strong>Inteligência Artificial</strong></h2>
        </Text>
      </Content>
    </Container>
  );
}

export default Landing;