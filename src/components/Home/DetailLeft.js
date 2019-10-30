/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { SubTitle } from '../Core/Text';
import MDreact from 'react-markdown/with-html';
import { PrimaryButton } from '../Core/Button';
import { FaCaretRight } from 'react-icons/fa';


const Bg = styled.div`
  margin: 70px 0px 70px 0px; 
`

const Img = styled.img`
  @media screen and (min-width: 320px) and (max-width: 375px){
    width: 260px;
  }
  @media screen and (min-width: 375px) and (max-width: 425px){
    width: 315px;
  }
  @media screen and (min-width: 376px) and (max-width: 769px) {
    width: 350px;
  }
`

const DetailLeft = ({ subTitle,pathImg,msgButton }) => {
  return (
    <Bg>
      <Container>
        <Row>
          <Col lg={5} md={6} sm={12} className="order-2">
            <SubTitle>
              <MDreact escapeHtml={false} source={subTitle}/>
            </SubTitle>
              { msgButton ? 
              <PrimaryButton>
                {msgButton}
                <FaCaretRight/>
              </PrimaryButton>: ''}
          </Col>
          <Col lg={7} md={6} sm={12} className="d-flex justify-content-center order-md-2 oder-md-1">
            <Img src={pathImg} />
          </Col>
        </Row>
      </Container>
    </Bg>
  )
}

export default DetailLeft
