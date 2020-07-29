import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import BannerMain from './components/BannerMain';
import dadosIniciais from './data/dados_iniciais.json';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
function App() {
  const AppWrapper = styled.div`
    background: var(--grayDark);
    padding-top: 94px;
    height: 100%;

    @media (max-width: 800px) {
      padding-top: 40px;
    }
  `;

  return (
    <AppWrapper>
      <Navbar />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Quais as diferenças entre estas três práticas muito citadas em diversos canais e fóruns? Hoje vamos explicar cada uma delas e traçar comparações para que não restem mais dúvidas!"
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />
      <Footer />
    </AppWrapper>
  );
}

export default App;
