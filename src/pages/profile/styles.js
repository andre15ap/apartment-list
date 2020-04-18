import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  text-align: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;

  p {
    font-size: 22px;
    margin: 20px 0;
    font-weight: bold;
    color: ${COLORS.PRIMARY};
  }

  form {
    display: flex;
    flex-direction: column;
    /* margin-top: 20px; */

    input {
      height: 44px;
      padding: 0 15px;
      color: ${COLORS.PRIMARY};
      border: 0;
      border-radius: 4px;
      margin-top: 10px;
    }

    hr {
      margin-top: 10px;
      border: 0;
      height: 1px;
      background: ${COLORS.GRAY_LIGHT};
    }

    button {
      height: 44px;
      padding: 0 15px;
      background: ${COLORS.PRIMARY};
      color: ${COLORS.WHITE};
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      margin-top: 10px;
      transition: background 0.2s;

      &:hover {
        background: ${COLORS.PRIMARY_DARK};
      }
    }

    span {
      color: ${COLORS.DANGER};
      align-self: flex-start;
      margin-top: 0;
    }
  }

  button {
    height: 40px;
    width: 100%;
    padding: 0 15px;
    background: ${COLORS.GRAY};
    color: ${COLORS.WHITE};
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    margin-top: 10px;
    transition: background 0.2s;

    &:hover {
      background: ${COLORS.SECONDARY_DARK};
    }
  }
`;
