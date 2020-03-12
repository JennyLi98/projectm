import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Button} from 'react-bootstrap';

class TestImage extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className='test-page'>
        <Row>
          <Col md={6} className="text-right">
            <img src={this.props.surl} alt='cannot display'  className="resultimgDisplayl"/>
          </Col>
          <Col md={6} className="text-left">
            <img src={this.props.turl} alt='cannot display'  className="resultimgDisplayr"/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TestImage;
