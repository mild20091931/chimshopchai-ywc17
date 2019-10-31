/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { BgBox } from '../Core/Bg';

const Img = styled.img`
  width: 102px;
  @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 56px;
  }
`;

const pathImg = [
  { img: 'MOF.png', position: 'right' },
  { img: 'FPO.png', position: 'center' },
  { img: 'CGD.png', position: 'left' },
  { img: 'Krungthai.png', position: 'right' },
  { img: 'MOTS.png', position: 'center' },
  { img: 'TAT.png', position: 'left' },
];
const BoxBrand = () => {
  return (
    <BgBox margin="150px 0px 150px 0px">
      <Container>
        <Row className="d-sm-none">
          {pathImg.map((data, i) => {
            return (
              <Col sm={4} key={i} className={`col-4 text-${data.position}`}>
                <Img src={`img/brand_logo/${data.img}`} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container>
        <Row className="d-none d-sm-block">
          <Row>
            {pathImg.map((data, i) => {
              return (
                <Col md={2} lg={2} key={i} className="d-flex justify-content-center">
                  <Img src={`img/brand_logo/${data.img}`} />
                </Col>
              );
            })}
          </Row>
        </Row>
      </Container>
    </BgBox>
  );
};

export default BoxBrand;
