import { NavLink, Outlet } from 'react-router-dom';

import { Header, Main } from './styles';

import coverImg from '../assets/cover.png';
import logoImg from '../assets/logo.svg';

export function DefaultLayout() {
  return (
    <>
      <Header>
        <img src={coverImg} />

        <NavLink to="/">
          <img src={logoImg} />
        </NavLink>  
      </Header>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}