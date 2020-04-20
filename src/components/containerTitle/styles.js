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
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding-bottom: 5px;
    display: flex;
    color: ${COLORS.PRIMARY};
  }

  span {
    margin-left: 3px;
    /* margin-bottom: 5px; */
  }
`;
