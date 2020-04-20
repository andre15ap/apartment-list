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
  }

  button {
    padding: 5px 6px 2px 6px;
    margin: 0 5px;
    background: ${COLORS.WHITE};
    border-radius: 5px;
    border-color: ${COLORS.GRAY_LIGHT};
    border-width: 1px;
  }
`;
