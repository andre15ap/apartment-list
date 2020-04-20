import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const Container = styled.div`
  height: calc(100vh - 64px);
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > div {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
  }

  h4 {
    align-self: center;
    color: ${COLORS.PRYMARY};
    text-align: center;
    margin: 20px;
  }
`;
