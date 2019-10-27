import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Title, SubTitle, P2 } from '../Core/Text';

const DetailLeft = () => {
  return (
    <Container>
      <Row>
        <Col>
          <SubTitle>ค้นหารายชื่อร้านค้า</SubTitle>
        </Col>
        <Col>
          <img src={'/img/banner_store.png'} />
        </Col>
      </Row>
    </Container>
  );
};

export default DetailLeft;
