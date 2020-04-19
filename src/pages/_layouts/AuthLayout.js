import React from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from '../../components/header/HeaderComponent';

import { Container, Content } from './styles';

function AuthLayout({ children }) {
  return (
    <Container>
      <HeaderComponent />
      <Content>{children}</Content>
    </Container>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
