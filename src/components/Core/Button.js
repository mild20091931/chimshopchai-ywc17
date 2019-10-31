import styled from 'styled-components';
import color from './Color';

export const ButtonRegister = styled.button`
  width: 50%;
  height: 20vh;
  background-color: ${color.blue};
  border: 0px;
  color: ${color.white};
  border-radius: 5px;
  box-shadow: 0 15px 30px 0 rgba(28, 78, 132, 0.4);
  &:hover{
    cursor: pointer;
    background-color:${color.yellow};
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`

export const PrimaryButton = styled.button`
  color: ${color.blue};
  border-radius: 5px;
  padding: 0.5em;
  font-family: TATSanaSuksaBold;
  background-color: ${color.white};
  border: solid 4px ${color.blue};
  font-size: 18px;
  margin-top: 30px;
  font-weight: bold;
  &:hover{
    cursor: pointer;
    background-color: ${color.blue};
    color: ${color.white};
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    margin-top:0px;
  }
`