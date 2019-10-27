import styled from 'styled-components';
import color from './Color'

export const ButtonRegister = styled.button`
  width: 72%;
  height: 25vh;
  background-color: ${color.bule};
  border: 0px;
  color: ${color.white};
  border-radius: 5px;
  &:hover{
    background-color:${color.yellow};
  }
`