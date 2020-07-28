import React from 'react';
import logo from '../../assets/imgs/logo.png';
import { MenuWrapper, LogoImage, ButtonLink } from './styles';
const Navbar = () => {
  return (
    <MenuWrapper>
      <a href="/">
        <LogoImage src={logo} alt="Motoflix logo" />
      </a>
      <ButtonLink as="a" href="/">
        NOVO VÍDEO
      </ButtonLink>
    </MenuWrapper>
  );
};

export default Navbar;
