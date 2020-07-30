import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const MainRoute = ({ children }) => {
  const Main = styled.main`
    flex: 1;
    background-color: var(--grayDark);
    color: var(--white);
    padding-top: 94px;
    padding-left: 5%;
    padding-right: 5%;

    @media (max-width: 800px) {
      padding-top: 40px;
    }
  `;
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default MainRoute;
