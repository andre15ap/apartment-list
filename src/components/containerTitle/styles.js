import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  strong {
    color: ${COLORS.PRIMARY};
    font-size: 18px;
    font-weight: bold;
  }

  button {
    padding: 5px 6px 2px 6px;
    margin: 0 5px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding-bottom: 5px;
    display: flex;
    color: ${COLORS.PRIMARY};
    background: ${COLORS.WHITE};
    border-radius: 5px;
    border-color: ${COLORS.GRAY_LIGHT};
    border-width: 1px;
  }

  span {
    margin-left: 5px;
  }
`;
