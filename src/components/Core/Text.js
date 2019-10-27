import styled from 'styled-components';
import size from './FontSize'

export const Title = styled.h3`
  font-family: 'Prompt', sans-serif;
  font-size: ${size.title};
  color: ${props => props.color};
  `
export const SubTitle = styled.p`
  font-family: 'Prompt', sans-serif;
  color: ${props => props.color};
  font-size: ${size.subtitle};
  `
export const Header = styled.p`
  font-family: 'Prompt', sans-serif;
  color: ${props => props.color};
  font-size: ${size.header};
  `
export const P1 = styled.p`
  font-size: ${size.p1};
  color: ${props => props.color};
  font-family: 'Bai Jamjuree', sans-serif;
  `
export const P2 = styled.p`
  font-size: ${size.p2};
  color: ${props => props.color};
  font-family: 'Bai Jamjuree', sans-serif;
  `
export const P3 = styled.p`
  font-size: ${size.p3};
  color: ${props => props.color};
  font-family: 'Bai Jamjuree', sans-serif;
`
