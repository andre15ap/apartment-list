import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 10px;
`;

export const Title = styled.h2`
  color: ${COLORS.PRIMARY};
  font-size: 18px;
  font-weight: bold;
`;

export const RowButton = styled.button`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  background: ${COLORS.TRANSPARENT};
  border: 0;
  border-bottom: solid 1px ${COLORS.GRAY_LIGHT};

  strong {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Check = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) =>
    props.select ? COLORS.PRIMARY_LIGHT : COLORS.WHITE};
  border: solid 2px ${COLORS.PRIMARY};
`;

export const ContainerButton = styled.div`
  display: flex;
`;

export const Button = styled.button`
  flex: 1;
  margin: 10px;
  border-radius: 5px;
  height: 40px;
  color: ${COLORS.WHITE};
  font-weight: bold;
  background: ${(props) => (props.confirm ? COLORS.PRIMARY : COLORS.GRAY)};
`;
