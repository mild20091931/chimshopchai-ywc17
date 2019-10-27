import React from 'react';
import MDreact from 'react-markdown/with-html';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Title,Header,P1, P3 } from '../Core/Text';
import color from '../Core/Color';

const Bg = styled.div`
  margin: 70px 0px 70px 0px; 
`

const BoxDetail = ({ detail,condition }) => {
  console.log(condition)
  return (
    <Bg>
    <Container>
      <Row>
        <Col md={10}>
          <Row>
            <Col>
            <Title  color={color.headTitle}>มาตรการส่งเสริมการบริโภค<br/>ในประเทศ "ชิมช้อปใช้"</Title>
            </Col>
          </Row>
        <Col className="mt-4">
          <P1>
            <MDreact escapeHtml={false} source={detail}/>
          </P1>
        </Col>
        <Col className="mt-4">
            <P1 className="font-weight-bold">เงื่อนไขการเข้าร่วมมาตรการ</P1>
            <P1>
              1. เป็นบุคคลสัญชาติไทย มีบัตรประจำตัวประชาชน<br/>
              2. มีอายุตั้งแต่ 18 ปีบริบูรณ์ขึ้นไป ณ วันที่ลงทะเบียน<br/>
              3. มีโทรศัพท์มือถือสมาร์ทโฟนที่สามารถเชื่อมต่อสัญญาณอินเทอร์เน็ตและมีอีเมล<br/>
            </P1>
        </Col>
        </Col>
      </Row>
    </Container>
    </Bg>
  )
}

export default BoxDetail
