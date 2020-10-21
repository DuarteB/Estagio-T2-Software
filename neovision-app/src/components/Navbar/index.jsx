import React from 'react';

import neovisionIcon from './../../styles/Images/neovisionIcon.png';
import facebook from '../../styles/Images/facebook.png'

import { 
  Container,
  Logo,
  Itens,
  Functions,
  Contact,
  FacebookIcon
 } from './styles';

function Navbar() {
  return (
    <Container>
      <Logo>
        <img src={neovisionIcon} alt="logo" />
      </Logo>
      <Itens>
        <Functions>
          <a href={"#"}>FUNCIONALIDADES</a>
        </Functions>
        <Contact>
          <a href={"#"}>CONTATO</a>
        </Contact>
        <FacebookIcon>
          <a href={"#"}>
            <img src={facebook} alt="facebookIcon" />
          </a>
        </FacebookIcon>
      </Itens>
      
    </Container>
  );
}

export default Navbar;