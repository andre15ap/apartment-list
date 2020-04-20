import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

  span {
    font-size: 12px;
  }
`;
