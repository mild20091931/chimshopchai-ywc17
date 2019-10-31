/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BgCallCenter } from '../Core/Bg';

const pathImg = [
  { img: 'Banner_KTB_SQ.png' },
  { img: 'Banner_CGD_Sq.png' },
  { img: 'Banner_TAT_Hotline_Sq.png' },
];
const BoxCallCenter = () => {
  return (
    <BgCallCenter>
      <Container fluid={true}>
        <Row>
          <Col className="d-none d-md-none d-xl-block" />
          {pathImg.map((data, i) => {
            return (
              <Col key={i} className="d-flex justify-content-center">
                <img src={`img/${data.img}`} />
              </Col>
            );
          })}
          <Col className="d-none d-md-none d-xl-block" />
        </Row>
      </Container>
    </BgCallCenter>
  );
};

export default BoxCallCenter;
