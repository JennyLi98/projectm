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
          <Col md={6}>
            <img src={this.props.surl} alt='cannot display'  className="resultimgDisplay"/>
          </Col>
          <Col md={6}>
            <img src={this.props.turl} alt='cannot display'  className="resultimgDisplay"/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TestImage;
