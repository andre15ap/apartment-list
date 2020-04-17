import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 340px;
  img {
    max-width: 150px;
    max-height: 150px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      height: 44px;
      padding: 0 15px;
      color: ${COLORS.PRIMARY};
      border: 0;
      border-radius: 4px;
      margin: 0 0 10px;
    }

    button {
      height: 44px;
      padding: 0 15px;
      background: ${COLORS.PRIMARY};
      color: ${COLORS.WHITE};
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      margin: 0 0 10px;
      transition: background 0.2s;

      &:hover {
        background: ${COLORS.PRIMARY_DARK};
      }
    }

    a {
      color: ${COLORS.PRIMARY};
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
