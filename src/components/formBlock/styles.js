import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100% - 64px);
  width: 100%;
  background: ${COLORS.OPACITY};
  text-align: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  background: ${COLORS.WHITE};
  margin-top: 30px;
  padding: 20px;
  border-radius: 5px;

  p {
    font-size: 22px;
    margin: 10px 0;
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
      border: solid 1px;
      border-radius: 4px;
    }

    label {
      margin-top: 10px;
      margin-bottom: 3px;
      font-size: 12px;
      font-weight: bold;
      align-self: flex-start;
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
