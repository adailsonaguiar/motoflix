import styled from 'styled-components';

const Button = styled.button`
  color: var(--white);
  background-color: var(--primary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 44px;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  outline: none;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.9;
  }

  @media (max-width: 800px) {
    & {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
  }
`;

export default Button;
