import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 0 10px;
  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 5px 6px 2px 6px;
    margin: 0 5px;
    background: ${COLORS.WHITE};
    border-radius: 5px;
    border-color: ${COLORS.GRAY_LIGHT};
    border-width: 1px;
  }

  strong {
    color: ${COLORS.PRIMARY};
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Card = styled.div`
  width: 100%;
  background: ${COLORS.WHITE};
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 2px ${COLORS.PRIMARY_TRANSPARENT};

  p {
    color: ${COLORS.GRAY};
    font-size: 18px;
    font-weight: bold;
  }
`;
