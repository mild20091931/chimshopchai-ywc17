import React from 'react';
import MDreact from 'react-markdown/with-html';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { SubTitle, P1 } from '../Core/Text';
import color from '../config/Color';

const Bg = styled.div`
  margin: 70px 0px 70px 0px;
`;

const BoxDetail = ({ detail, condition }) => {
  console.log(condition);
  return (
    <Bg>
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
              <P1>
                <MDreact escapeHtml={false} source={detail} />
              </P1>
            </Col>
            <Col className="mt-4">
              <P1 className="font-weight-bold">เงื่อนไขการเข้าร่วมมาตรการ</P1>
              <P1>
                <MDreact escapeHtml={false} source={condition} />
              </P1>
            </Col>
          </Col>
        </Row>
      </Container>
    </Bg>
  );
};

export default BoxDetail;
