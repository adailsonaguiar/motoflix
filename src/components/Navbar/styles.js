import styled from 'styled-components';
import Button from '../Button';

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  position: fixed;
  top: 0;
  left: 0%;
  padding-left: 5%;
  padding-right: 5%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--black);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    height: 50px;
    justify-content: center;
  }
`;

export const LogoImage = styled.img`
  max-width: 168px;
  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export const ButtonLink = styled(Button)`
  color: var(--white);
  background-color: var(--primary);
  padding: 16px 44px;

  @media (max-width: 800px) {
    & {
      background: var(--primary);
      bottom: 0;
      border: 0;
      border-radius: 0;
      left: 0;
      position: fixed;
      right: 0;
      text-align: center;
    }
  }
`;
