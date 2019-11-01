import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { SubTitle, P1 } from '../Core/Text';
import color from '../../config/Color';
import { BgBox } from '../Core/Bg';

const BoxDetail = ({ detail, condition }) => {
  return (
    <BgBox margin="70px 0px 70px 0px">
      <Container>
        <Row>
          <Col md={10}>
            <Row>
              <Col>
                <SubTitle color={color.headTitle}>
                  มาตรการส่งเสริมการบริโภค
                  <br />
                  ในประเทศ "ชิมช้อปใช้"
                </SubTitle>
              </Col>
            </Row>
            <Col className="mt-4">
              <P1 dangerouslySetInnerHTML={{ __html: detail || '' }} />
            </Col>
            <Col className="mt-4">
              <P1 className="font-weight-bold">เงื่อนไขการเข้าร่วมมาตรการ</P1>
              <P1 dangerouslySetInnerHTML={{ __html: condition || '' }} />
            </Col>
          </Col>
        </Row>
      </Container>
    </BgBox>
  );
};

export default BoxDetail;
