import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/svgs/logo.svg';

import { Container, Content } from '../signIn/styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo E-mail é obrigatório'),
  name: Yup.string().min(6, 'Nome Completo').required('Nome é obrigatório'),
  password: Yup.string()
    .min(6, 'Minimo 6 caracteres')
    .required('Senha é obrigatório'),
});

function SignUpPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password));
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="kiper" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" placeholder="digite seu nome completo" />
          <Input name="email" type="email" placeholder="digite seu email" />
          <Input
            name="password"
            type="password"
            placeholder="digite sua senha"
          />

          <button type="submit">
            {loading ? 'Carregando ...' : 'Cadastrar'}
          </button>

          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </Content>
    </Container>
  );
}

export default SignUpPage;
