import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt, FaEdit, FaUserFriends } from 'react-icons/fa';

import COLORS from '../../constants/colors';

import { Conteiner, Title } from './styles';

function CardBodyComponent({
  title,
  subTitle,
  subSubTitle,
  actionEdit,
  actionDelete,
  actionDwellers,
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
        {actionDwellers && (
          <button onClick={() => actionDwellers()} type="button">
            <FaUserFriends color={COLORS.PRIMARY_LIGHT} size={20} />
          </button>
        )}
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
  actionDwellers: PropTypes.func,
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
  actionDwellers: null,
};

export default CardBodyComponent;
