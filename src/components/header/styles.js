import styled from 'styled-components';

import COLORS from '../../constants/colors';

export const Container = styled.div`
  background: ${COLORS.PRIMARY};
  padding: 0 30px;
  position: absolute;
  width: 100%;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  img {
    /* max-height: 30px; */
    margin-right: 15px;
    padding-right: 15px;
    border-right: 1px solid ${COLORS.GRAY_LIGHT};
  }

  a {
    color: ${COLORS.WHITE};
    font-weight: bold;
  }

  aside {
    display: flex;
    align-items: center;

    a {
      margin: 0 5px;
    }
  }

  .rowProfile {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .profile {
      display: none;
    }
    .rowProfile {
      display: flex;
    }
    .aside {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 15px;
  padding-left: 15px;
  border-left: 1px solid ${COLORS.GRAY_LIGHT};

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${COLORS.BLACK};
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: ${COLORS.WHITE};
    }
  }
`;
