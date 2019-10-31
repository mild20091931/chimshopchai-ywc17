import styled from 'styled-components';

export const BgBox = styled.div`
  margin: ${props => props.margin};
`;

export const BgCallCenter = styled.div`
  margin: 70px 0px 70px 0px;
  @media (max-width: 1200px) {
    img {
      width: 300px;
    }
  }
  @media (max-width: 770px) {
    img {
      width: 200px;
    }
  }
  @media (max-width: 430px) {
    img {
      width: 300px;
    }
  }
`;
