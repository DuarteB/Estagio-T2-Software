import React from 'react';

import { 
  Container,
  Title,
  InputArea,
  NameInput,
  Input,
  EmailInput,
  InputButton,
 } from './styles';

function Register() {
  return (
    <Container>
      <Title>
        Quer conhecer mais sobre o Neovision?
      </Title>
      <InputArea>
        <NameInput>
          <Input placeholder="Nome">
            <span>Nome</span>
          </Input>
        </NameInput>
        <EmailInput>
          <Input placeholder="E-mail">
            <span>E-mail</span>
          </Input>
        </EmailInput>
        <InputButton>
          <button>Enviar</button>
        </InputButton>
      </InputArea>
      
    </Container>
  );
}

export default Register;