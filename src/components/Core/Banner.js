import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Container, Row as RowStyle, Col } from 'reactstrap';

const Bg = styled.div`
  height:350px;
  background-image: url(${props => props.pathName});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 577px){
    height: 221px;
    padding: 0;
  }
`
const Row = styled(RowStyle)`
  .col{
    padding:0px;
    margin:0px;
  }
`
const Img = styled.img`
  width: 280px;
  padding:20px;
  @media (max-width: 577px){
    width: 110px;
    padding:0px;
  }
`
const pathImg = [
  { position : 'left'},
  { position : 'center'},
  { position : 'right'},
]
class Banner extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row >
          {pathImg.map((data,i) => {
            return (
              <Col key={i}>
                <Bg pathName={`/img/hero_banner/banner-${data.position}.png`}>
                  {data.position === 'center' ?
                  <RowStyle>
                    <Col className="d-flex justify-content-center align-self-center">
                      <Img className="mw-100" src={'/img/hero_banner/banner.png'}/>
                    </Col>
                  </RowStyle>
                  :''}
                </Bg>
              </Col>
            )
          })}
        </Row>
      </Container>
    );
  }
}

export default Banner;