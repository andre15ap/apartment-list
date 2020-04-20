import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

import COLORS from '../../constants/colors';

import { Conteiner, Title } from './styles';

function CardBodyComponent({
  title,
  subTitle,
  subSubTitle,
  actionEdit,
  actionDelete,
  item,
}) {
  return (
    <Conteiner>
      <div>
        <Title>{title}</Title>
        <p>{subTitle}</p>
        <p>{subSubTitle}</p>
      </div>
      <div>
        <button onClick={() => actionEdit(item)} type="button">
          <FaEdit color={COLORS.SECONDARY_DARK} size={20} />
        </button>
        <button onClick={() => actionDelete(item.id)} type="button">
          <FaTrashAlt color={COLORS.DANGER} size={20} />
        </button>
      </div>
    </Conteiner>
  );
}

CardBodyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  subSubTitle: PropTypes.string,
  actionEdit: PropTypes.func.isRequired,
  actionDelete: PropTypes.func.isRequired,
  item: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.object,
    ])
  ).isRequired,
};

CardBodyComponent.defaultProps = {
  subTitle: '',
  subSubTitle: '',
};

export default CardBodyComponent;
