import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

function ModalCardFormComponent({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

ModalCardFormComponent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ModalCardFormComponent;
