/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import color from '../../config/Color';
import { P3, P2 } from '../Core/Text';

const Bg = styled.div`
  background-color: ${color.bgFooter};
  height: auto;
  padding: 30px;
  .mt-4 {
    margin-bottom: 10px;
  }
`;

const CopyRightBg = styled.nav`
  background-color: ${color.blue};
  color: ${color.white};
  a {
    color: ${color.white};
    text-decoration: none;
  }
`;

const Img = styled.img`
  width: 102px;
`;

const content = [
  {
    title: 'ข้อมูลลงทะเบียนประชาชน',
    content:
      'การรับสิทธิ การใช้งานแอปพลิเคชั่น <br/> “เป๋าตัง” และ “ถุงเงิน” <br/>ติดต่อ ชิมช้อปใช้ Call Center by Krungthai <br/>โทร.0 2111 1144',
  },
  {
    title: 'ข้อมูลลงทะเบียนผู้ประกอบการ',
    content: 'เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ <br/> ติดต่อ โทร.0 2270 6400 กด 7',
  },
  {
    title: 'ข้อมูลเที่ยวชิมช้อปใช้',
    content: 'ติดต่อ ททท. <br/>โทร 1672',
  },
];

const BoxBrand = ({ navbarItems }) => {
  return (
    <Fragment>
      <Bg>
        <Container>
          <Row>
            <Col sm={12} md={3}>
              <Img src="img/footer.png" />
            </Col>
            {content.map((data, i) => {
              return (
                <Col sm={12} md={3}>
                  <P2 className="mt-4 font-weight-bold" color={color.headTitle}>
                    {data.title}
                  </P2>
                  <P3
                    color={color.font}
                    dangerouslySetInnerHTML={{ __html: data.content || '' }}
                  ></P3>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Bg>
      <CopyRightBg>
        <Container>
          <Row className="d-flex align-items-end">
            <Col sm={12} md={3}>
              <P3 className="mt-2 font-weight-bold">Copyright © 2003-2019</P3>
            </Col>
            {navbarItems.map((data, i) => {
              return (
                <Col sm={12} md={3}>
                  <P3 className="mt-2 font-weight-bold">
                    <a href={data.href}>{data.label}</a>
                  </P3>
                </Col>
              );
            })}
          </Row>
        </Container>
      </CopyRightBg>
    </Fragment>
  );
};

export default BoxBrand;
