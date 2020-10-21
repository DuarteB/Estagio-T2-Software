import React from 'react';

import Verified from '../../styles/Images/verified.png'

import { 
  Container,
  Image,
  Title,
  Text,
  ContentText,
  List
} from './styles';

import contentImage from '../../styles/Images/contentImage.png';

function Content() {
  return (
    <Container>
        <ContentText>
          <Title>
            Neovision
          </Title>
          <Text>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria

              tipográfica e de impressos, e vem sendo utilizado desde o século XVI,

              quando um impressor desconhecido pegou uma bandeja de tipos e os

              embaralhou para fazer um livro de modelos de tipos.<br />
              <br/>

              Lorem Ipsum é simplesmente uma simulação de texto da indústria

              tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 

              quando um impressor desconhecido pegou uma bandeja de tipos e os

              embaralhou para fazer um livro de modelos de tipos.
            </p>

          </Text>
        </ContentText>
        <Image>
          <img src={contentImage}/>
          <List>
            <a href={"#"}>
              <img src={Verified} alt="verifiedIcon" />
              <p>Funcionalidade 1</p>
            </a>
            <a href={"#"}>
              <img src={Verified} alt="verifiedIcon" />
              <p>Funcionalidade 2</p>
            </a>
            <a href={"#"}>
              <img src={Verified} alt="verifiedIcon" />
              <p>Funcionalidade 3</p>
            </a>
          </List>
        </Image>
    </Container>
  );
}

export default Content;