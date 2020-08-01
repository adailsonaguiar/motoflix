import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [initialDatas, setInitialDatas] = useState([]);
  const AppWrapper = styled.div`
    background: var(--grayDark);
    height: 100%;
  `;

  useEffect(() => {
    categoriesRepository
      .getAllCategoriesWithVideos()
      .then((value) => setInitialDatas(value));
  }, []);
  return (
    <AppWrapper>
      {initialDatas.map((category, index) => {
        if (index === 0) {
          return (
            <>
              <BannerMain
                videoTitle={category.videos[0].titulo}
                url={category.videos[0].url}
                videoDescription="Quais as diferenças entre estas três práticas muito citadas em diversos canais e fóruns? Hoje vamos explicar cada uma delas e traçar comparações para que não restem mais dúvidas!"
              />
              <Carousel ignoreFirstVideo category={category} />
            </>
          );
        }
        return (
          <Carousel key={category.id} ignoreFirstVideo category={category} />
        );
      })}
    </AppWrapper>
  );
}

export default Home;
