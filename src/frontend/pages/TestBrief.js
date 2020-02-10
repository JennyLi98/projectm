import React from "react";
import '../css/TestBrief.css';
import BrainImg from '../imgs/brainIcon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Button} from 'react-bootstrap';

const TestBrief = (props) => {
  return (
    <div className='test-page'>
      <Row>
        <Col xs={4}>
          <img src={BrainImg} alt='cannot display'  className="testimgDisplay"/>
        </Col>
        <Col xs={8}>
          <h1  className="testTextDisplay">
            Project {props.id}
          </h1>
          <div className="buttonBlock" >
            <Button className="testButtonDisplay" href="/pretest">Click to Start</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}


export default TestBrief;
