/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

const Bg = styled.div`
  margin: 150px 0px 150px 0px; 
`
const Img = styled.img`
  width: 102px;
`

const pathImg = [
  { img: "MOF.png" },
  { img: "FPO.png" },
  { img: "CGD.png" },
  { img: "Krungthai.png" },
  { img: "MOTS.png" },
  { img: "TAT.png" },
]
const BoxBrand = () => {
  return (
    <Bg>
      <Container fluid={true}>
        <Row >
          <Col/>
          {pathImg.map((data,i)=>{
            return (
              <Col key={i} className="d-flex justify-content-center">
                <Img src={`img/brand_logo/${data.img}`}/>
              </Col>
            )})
          }
          <Col/>
        </Row>
      </Container>
    </Bg>
  )
}

export default BoxBrand