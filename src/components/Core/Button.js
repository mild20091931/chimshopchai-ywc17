import styled from 'styled-components';
import color from './Color'

export const ButtonRegister = styled.button`
  width: 50%;
  height: 20vh;
  background-color: ${color.bule};
  border: 0px;
  color: ${color.white};
  border-radius: 5px;
  &:hover{
    background-color:${color.yellow};
  }
  @media screen and (min-width: 325px) and (max-width: 768px) {
    width: 100%;
  }
`