import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" target="_blank">
          Imersão React da Alura
        </a>
        {' '}
        por
        {' '}
        <a href="https://www.linkedin.com/in/adailsonaguiar/" target="_blank">
          <strong>Adailson Aguiar</strong>
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
