import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/svgs/logo.svg';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatório'),
});

function SignInPage() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="kiper" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="digite seu email" />
          <Input
            name="password"
            type="password"
            placeholder="digite sua senha"
          />

          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>

          <Link to="/registrar">Criar Conta</Link>
        </Form>
      </Content>
    </Container>
  );
}

export default SignInPage;
