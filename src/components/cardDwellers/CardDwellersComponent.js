import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ModalCardFormComponent from '../modalCardForm/ModalCardFormComponent';

import {
  Container,
  Title,
  RowButton,
  Check,
  Button,
  ContainerButton,
} from './styles';

function CardDwellersComponent({ close, action, dwellers }) {
  const [dweller, setDweller] = useState('');

  const handleClick = (value) => {
    setDweller(value);
  };

  const handleConfirm = () => {
    const data = { id: dweller, byApartment: true, responsible: true };
    action(data);
    close();
  };

  const getDwellers = () => {
    if (dwellers.length === 1) {
      setDweller(dwellers[0].value);
    } else {
      const responsible = dwellers.filter(
        (value) => value.responsible === true
      );
      setDweller(responsible[0].value);
    }
  };

  useEffect(() => {
    getDwellers();
  }, [dwellers]);
  return (
    <ModalCardFormComponent>
      <Container>
        <Title>Escolha o Responsável pelo Apartamentos</Title>
        <div>
          {dwellers.map((value) => (
            <RowButton
              key={value.value}
              onClick={() => handleClick(value.value)}
            >
              <strong>{value.label}</strong>
              <Check select={dweller === value.value} />
            </RowButton>
          ))}
        </div>
      </Container>
      <ContainerButton>
        <Button onClick={close} type="button">
          Cancelar
        </Button>
        <Button onClick={handleConfirm} confirm type="button">
          Confirmar
        </Button>
      </ContainerButton>
    </ModalCardFormComponent>
  );
}

CardDwellersComponent.propTypes = {
  close: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  dwellers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardDwellersComponent;
