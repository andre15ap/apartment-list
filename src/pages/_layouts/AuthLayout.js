import React from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from '../../components/header/HeaderComponent';

import { Container } from './styles';

function AuthLayout({ children }) {
  return (
    <Container>
      <HeaderComponent />
      {children}
    </Container>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
