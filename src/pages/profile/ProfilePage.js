import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import { Container, Content } from './styles';

function ProfilePage() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (data) => {
    dispatch(updateRequest(data));
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <Content>
        <p>{profile.email}</p>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <Input name="name" placeholder="digite seu nome completo" />
          <hr />
          <Input
            name="oldPassword"
            type="password"
            placeholder="digite sua senha atual"
          />
          <Input
            name="password"
            type="password"
            placeholder="digite a nova senha"
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="confirme a nova senha"
          />

          <button type="submit">
            {loading ? 'Carregando ...' : 'Atualizar Dados'}
          </button>
        </Form>
        <button onClick={handleSignOut} type="button">
          Sair do Sistema
        </button>
      </Content>
    </Container>
  );
}

export default ProfilePage;
