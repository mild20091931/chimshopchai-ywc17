/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { SubTitle,P2 } from '../Core/Text';
import MDreact from 'react-markdown/with-html';
import { PrimaryButton } from '../Core/Button';
import { FaCaretRight } from 'react-icons/fa';

const Img = styled.img`
  width: 168px;
@media screen and (min-width: 320px) and (max-width: 770px) {
  width: 120px;
}
`

const ImgLeft = styled.img`
  @media screen and (min-width: 320px) and (max-width: 374px){
    width: 260px;
  }
  @media screen and (min-width: 375px) and (max-width: 425px){
    width: 315px;
  }
  @media screen and (min-width: 376px) and (max-width: 770px) {
    width: 300px;
    height: 206px;
  }
`


const DetailRight = ({ subTitle, pathImg, video, content, pic1, pic2, msgButton }) => {
  return (
    <Container className="mt-4 md-4">
      <Row>
        <Col lg={7} md={6} sm={12} className="">
          {video === undefined ? 
              // eslint-disable-next-line jsx-a11y/alt-text
              <ImgLeft src={ pathImg } />
              :
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={video} allowFullScreen></iframe>
              </div>
            }
        </Col>
        <Col lg={5} md={6} sm={12}>
          <SubTitle>
            <MDreact escapeHtml={false} source={subTitle}/>
            { msgButton ? 
            <PrimaryButton>
              {msgButton}
              <FaCaretRight/>
            </PrimaryButton>: ''}
          </SubTitle>
          <P2>
            <MDreact escapeHtml={false} source={content}/>
          </P2>
          <Img className="mr-4" src={pic1}/>
          <Img src={pic2}/>
        </Col>
      </Row>
    </Container>
  )
}

export default DetailRight
