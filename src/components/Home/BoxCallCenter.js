/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

const Bg = styled.div`
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
`
const pathImg = [
  { img: "Banner_KTB_SQ.png" },
  { img: "Banner_CGD_Sq.png" },
  { img: "Banner_TAT_Hotline_Sq.png" },
]
const BoxCallCenter = () => {
  return (
    <Bg>
      <Container fluid={true}>
        <Row >
          <Col className="d-none d-md-none d-xl-block"/>
            {pathImg.map((data,i)=>{
              return (
                <Col key={i} className="d-flex justify-content-center">
                  <img src={`img/${data.img}`}/>
                </Col>
              )
            })}
          <Col className="d-none d-md-none d-xl-block"/>
        </Row>
      </Container>
    </Bg>
  )
}

export default BoxCallCenter
