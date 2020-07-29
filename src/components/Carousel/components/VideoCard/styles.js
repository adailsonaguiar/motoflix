import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 2px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: transform 0.2s;
  &:hover,
  &:focus {
    /* opacity: 0.8; */
    transform: scale(1.05);
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
