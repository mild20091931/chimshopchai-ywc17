import React, { Component } from 'react';
import { ButtonRegister } from '../Core/Button';
import { Container, Row, Col } from 'reactstrap';
import { Title,Header } from '../Core/Text'

class Register extends Component {
  render() {
    return (
      <Container className="d-flex justify-content-center">
        <ButtonRegister>
          <Header>
            ลงทะเบียนเฟส 2 <br/>
            ตั้งแต่วันที่ 24 ต.ค. 62 วันะ 2 รอย เวลา 6.00 และ 18.00 <br/>
            (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)<br/>
          </Header>
        </ButtonRegister>
      </Container>
    );
  }
}

export default Register;