import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/svgs/logo_small.svg';

import { Container, Content, Profile } from './styles';

function HeaderComponent() {
  const profile = useSelector((state) => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="kiper" />
        </nav>

        <aside>
          <div className="links">
            <Link to="/moradores">Moradores</Link>
            <Link to="/apartamentos">Apartamentos</Link>
            <Link to="/blocos">Blocos</Link>
          </div>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default HeaderComponent;
