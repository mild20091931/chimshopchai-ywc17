import styled from 'styled-components';
import size from './FontSize'

export const Title = styled.h3`
  font-size: ${size.title};
  color: ${props => props.color};
  `
export const SubTitle = styled.p`
  font-size: ${size.subtitle};
  `
export const Header = styled.p`
  font-size: ${size.header};
  `
export const P1 = styled.p`
  font-size: ${size.p1};
  `
export const P2 = styled.p`
  font-size: ${size.p2};
`
export const P3 = styled.p`
  font-size: ${size.p3};
`
