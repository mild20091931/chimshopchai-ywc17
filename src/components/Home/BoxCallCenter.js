/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { SubTitle } from '../Core/Text';
import MDreact from 'react-markdown/with-html';

const Bg = styled.div`
  margin: 70px 0px 70px 0px; 
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
          <Col/>
          {pathImg.map((data,i)=>{
            return (
              <Col key={i} className="d-flex justify-content-center">
                <img src={`/img/${data.img}`}/>
              </Col>
            )
          })
          }
          <Col/>
        </Row>
      </Container>
    </Bg>
  )
}

export default BoxCallCenter
