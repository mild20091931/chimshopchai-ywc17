import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Title,SubTitle,P2 } from '../Core/Text';
import MDreact from 'react-markdown/with-html';

const DetailRight = ({ subTitle, pathImg, video, content}) => {
  console.log(video)
  return (
    <Container className="mt-4 md-4">
      <Row>
        <Col lg={7} sm={12} className="d-flex justify-content-center">
          {video === undefined ? 
              <img src={pathImg}/>
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
              <P2>{content !== undefined ?
                <MDreact escapeHtml={false} source={content}/>:
                ''
              }</P2>
        </Col>
      </Row>
    </Container>
  )
}

export default DetailRight
