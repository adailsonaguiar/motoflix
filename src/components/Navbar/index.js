import React from 'react';
import logo from '../../assets/imgs/logo.png';
// import ButtonLink from './components/ButtonLink';
import './styles.css';
import ButtonLink from '../Button';

const Navbar = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="Motoflix logo" />
      </a>
      <ButtonLink as="a" href="/">
        NOVO VÍDEO
      </ButtonLink>
    </nav>
  );
};

export default Navbar;
