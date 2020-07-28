import styled from 'styled-components';
import Button from '../Button';

export const BannerMainContainer = styled.section`
  height: 80vh;
  color: var(--white);
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
`;

export const ContentAreaContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1``;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    text-align: center;
    font-size: 32px;
  }
`;

export const WatchButton = styled(Button)`
  background: #ffc800;
  margin-left: auto;
  margin-right: auto;
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;
