import React, { Component } from 'react';
import { ButtonRegister } from '../Core/Button';
import { Container, Row, Col } from 'reactstrap';
import { Title,Header,P2 } from '../Core/Text';
import color from '../Core/Color';

class Register extends Component {
  render() {
    const { duration } = this.props;
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <P2 className="text-center font-weight-bold mt-4">ตั้งแต่วันที่</P2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Title className="text-center" color={color.headTitle}><strong>{duration}</strong></Title> 
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-4">
            <ButtonRegister>
              <Header>
                ลงทะเบียนเฟส 2 <br/>
                ตั้งแต่วันที่ 24 ต.ค. 62 วันะ 2 รอย เวลา 6.00 และ 18.00 <br/>
                (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)<br/>
              </Header>
            </ButtonRegister>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;