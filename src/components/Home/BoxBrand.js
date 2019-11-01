/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { BgBox } from '../Core/Bg';

const Img = styled.img`
  width: 102px;
  display: 'flex';
  &:hover {
    transform: scale(1.2);
    transition: all 0.55s ease-in-out;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    width: 56px;
  }
`;

const pathImg = [
  { img: 'MOF.png', position: 'right', link: 'https://www.mof.go.th/th/home' },
  { img: 'FPO.png', position: 'center', link: 'http://www.fpo.go.th' },
  { img: 'CGD.png', position: 'left', link: 'https://www.cgd.go.th' },
  { img: 'Krungthai.png', position: 'right', link: 'https://www.newcb.ktb.co.th' },
  { img: 'MOTS.png', position: 'center', link: 'https://www.mots.go.th' },
  { img: 'TAT.png', position: 'left', link: 'https://thai.tourismthailand.org' },
];

const BoxBrand = () => {
  return (
    <BgBox margin="150px 0px 150px 0px">
      <Container>
        <Row className="d-sm-none">
          {pathImg.map((data, i) => {
            return (
              <Col sm={4} key={i} className={`col-4 text-${data.position}`}>
                <NavLink href={data.link}>
                  <Img src={`img/brand_logo/${data.img}`} />
                </NavLink>
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
                  <NavLink href={data.link}>
                    <Img src={`img/brand_logo/${data.img}`} />
                  </NavLink>
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
