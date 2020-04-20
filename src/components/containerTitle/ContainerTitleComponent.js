import React from 'react';
import PropTypes from 'prop-types';
import { FaRegPlusSquare } from 'react-icons/fa';
import COLORS from '../../constants/colors';

import { Container } from './styles';

function ContainerTitleComponent({ title, action }) {
  return (
    <Container>
      <div>
        <strong>{title}</strong>
        <button type="button" onClick={action}>
          <FaRegPlusSquare color={COLORS.PRIMARY} size={20} />
          <span>Novo</span>
        </button>
      </div>
    </Container>
  );
}

ContainerTitleComponent.propTypes = {
  action: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContainerTitleComponent;
