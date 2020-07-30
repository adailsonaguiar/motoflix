import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png';
import { MenuWrapper, LogoImage, ButtonLink } from './styles';
const Navbar = () => {
  return (
    <MenuWrapper>
      <a href="/">
        <LogoImage src={logo} alt="Motoflix logo" />
      </a>
      <Link to="/new-video">
        <ButtonLink as="a">NOVO VÍDEO</ButtonLink>
      </Link>
    </MenuWrapper>
  );
};

export default Navbar;
