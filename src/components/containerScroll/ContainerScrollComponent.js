import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ConteinerScrollComponent({ children }) {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
}

ConteinerScrollComponent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
export default ConteinerScrollComponent;
