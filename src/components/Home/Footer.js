/* eslint-disable jsx-a11y/alt-text */
import React,{ Fragment } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import color from '../Core/Color';
import { P3,P2 } from '../Core/Text';
import MDreact from 'react-markdown/with-html';

const Bg = styled.div`
  background-color: ${color.bgFooter};
  height: 212px;
  padding: 30px;
  .mt-4 {
    margin-bottom: 10px;
  }
`

const CopyRightBg = styled.nav`
  background-color: ${color.bule};
  color: ${color.white};
  /* height: 5vh; */
  a {
    color: ${color.white};
    text-decoration: none;
  }
`

const Img = styled.img`
  width: 102px;
`

const content = [
  { title: "ข้อมูลลงทะเบียนประชาชน", content: "การรับสิทธิ การใช้งานแอปพลิเคชั่น <br/> “เป๋าตัง” และ “ถุงเงิน” <br/>ติดต่อ ชิมช้อปใช้ Call Center by Krungthai <br/>โทร.0 2111 1144" },
  { title: "ข้อมูลลงทะเบียนผู้ประกอบการ", content: "เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ <br/> ติดต่อ โทร.0 2270 6400 กด 7" },
  { title: "ข้อมูลเที่ยวชิมช้อปใช้", content: "ติดต่อ ททท. <br/>โทร 1672" },
]

const BoxBrand = ({ navbarItems }) => {
  return (
    <Fragment>
      <Bg>
        <Container fluid={true}>
          <Row >
            <Col className="d-none d-md-none d-xl-block"/>
              <Col>
                <Img src="img/footer.png"/>
              </Col>
              {content.map((data,i) => {
                return (
                  <Col>
                    <P2 className="mt-4" color={color.headTitle}>
                      <strong>
                        {data.title}
                      </strong>
                    </P2>
                    <P3 color={color.font}>
                      <MDreact escapeHtml={false} source={data.content}/>
                    </P3>
                  </Col>
                )
              })}
            <Col className="d-none d-md-none d-xl-block"/>
          </Row>
        </Container>
      </Bg>
      <CopyRightBg>
      <Container fluid={true}>
        <Row >
          <Col className="d-none d-md-none d-xl-block"/>
            <Col>
              <P3>Copyright © 2003-2019</P3>
            </Col>
            {navbarItems.map((data,i) => {
              return (
                <Col>
                  <P3>
                    <a href={data.href}>{data.label}</a>
                  </P3>
                </Col>
              )
            })}
          <Col className="d-none d-md-none d-xl-block"/>
        </Row>
      </Container>
      </CopyRightBg>
    </Fragment>
  )
}

export default BoxBrand