import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const Container = styled.div`
  /* background: ${COLORS.WHITE}; */
  padding: 5px 10px;
  border-radius: 5px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > input {
      flex: 2;
      border-radius: 5px;
      border-width: 1px;
      padding-left: 5px;
      height: 38px;
      margin: 5px;
    }
    > div {
      flex: 2;
      height: 38px;
      margin: 5px;
    }

    button {
      height: 38px;
      margin: 5px;
    }
  }

  @media only screen and (max-width: 600px) {
    .filter {
      flex-direction: column;
    }
  }
`;
