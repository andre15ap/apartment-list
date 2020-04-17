import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/svgs/logo.svg';

import { Container, Content } from '../signIn/styles';

function SignUpPage() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="kiper" />

        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="digite seu nome completo" />
          <Input name="email" type="email" placeholder="digite seu email" />
          <Input
            name="password"
            type="password"
            placeholder="digite sua senha"
          />

          <button type="submit">Cadastrar</button>

          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </Content>
    </Container>
  );
}

export default SignUpPage;
