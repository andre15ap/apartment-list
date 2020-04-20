import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const Conteiner = styled.div`
  background: ${COLORS.WHITE};
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 2px ${COLORS.PRIMARY_TRANSPARENT};

  p {
    color: ${COLORS.GRAY};
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Title = styled.h3`
  color: ${COLORS.PRIMARY};
  font-size: 16px;
  font-weight: bold;
`;
