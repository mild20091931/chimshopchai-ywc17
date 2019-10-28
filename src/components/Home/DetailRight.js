/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { SubTitle,P2 } from '../Core/Text';
import MDreact from 'react-markdown/with-html';

const Img = styled.img`
  width: 168px;
`

const DetailRight = ({ subTitle, pathImg, video, content, pic1, pic2 }) => {
  console.log(video)
  return (
    <Container className="mt-4 md-4">
      <Row>
        <Col lg={7} sm={12} className="d-flex justify-content-center">
          {video === undefined ? 
              // eslint-disable-next-line jsx-a11y/alt-text
              <img src={ pathImg } />
              :
              <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src={video} allowfullscreen></iframe>
              </div>
            }
        </Col>
        <Col lg={5} sm={12}>
          <SubTitle>
            <strong>
              <MDreact escapeHtml={false} source={subTitle}/>
            </strong>
          </SubTitle>
          <P2>
            {content !== undefined ?
              <MDreact escapeHtml={false} source={content}/>:
              ''
            }
          </P2>
          <Img className="mr-4" src={pic1}/>
          <Img src={pic2}/>
        </Col>
      </Row>
    </Container>
  )
}

export default DetailRight
