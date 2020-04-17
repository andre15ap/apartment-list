import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/svgs/logo.svg';

import { Container, Content } from './styles';

function SignInPage() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="kiper" />

        <Form onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="digite seu email" />
          <Input
            name="password"
            type="password"
            placeholder="digite sua senha"
          />

          <button type="submit">Acessar</button>

          <Link to="/registrar">Criar Conta</Link>
        </Form>
      </Content>
    </Container>
  );
}

export default SignInPage;
