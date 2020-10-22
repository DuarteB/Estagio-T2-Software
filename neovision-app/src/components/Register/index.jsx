import React from 'react';
import axios from 'axios';

import { 
  Container,
  Title,
  InputArea,
  NameInput,
  Input,
  EmailInput,
  InputButton,
 } from './styles';

 export default class Register extends React.Component {
  state = {
    name: '',
    email: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    this.setState({ email: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
  
    const body = {
      "name": this.state.name,
      "email": this.state.email
    };
  
    axios.post(` https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register`, { body }, {
      headers: {
        candidate: "edu.duarte.batista@outlokk.com",
      }
    }
     )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <Container>
      <Title>
        Quer conhecer mais sobre o Neovision?
      </Title>
      <InputArea>
      <form onSubmit={this.handleSubmit}>
        <NameInput>
          <Input placeholder="Nome">
            <span>Nome:</span>
            <input type="text" name="name" id="name" onChange={this.handleChange}/>
          </Input>
        </NameInput>
        <EmailInput>
          <Input placeholder="E-mail">
            <span>E-mail:</span>
            <input type="text" name="e-mail" id="email" onChange={this.handleChange}/>
          </Input>
        </EmailInput>
        <InputButton>
          <button type="submit">Enviar</button>
        </InputButton>
      </form>
      </InputArea>
    </Container>
    )
  }
}

