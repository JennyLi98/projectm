import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/TestPage.css';
import {Container, Row, Col, Button, Form, Check} from 'react-bootstrap';
import { withRouter } from 'react-router';
import {Redirect} from 'react-router-dom';
import TestImage from './TestImage.js';
import YearMonthPicker from 'react-year-month-picker'
import {Link} from 'react-router-dom';
import '../css/pretest.css';

import "react-datepicker/dist/react-datepicker.css";


class Pretest extends Component {

  state = {
    textIdx: 0,
    finished: false,
    interval: 3000,
    time: 0,
    list: [],
    choseAnswer: false,
    stage: 0,
    form: {},
    intervalId: 0,
    age: 18,
    gender: "Female",
    email: ""
  };

  agreedDisclaimer = () => {
    this.setState({stage: 1});
    console.log(this.state.stage);
  }

  updateField = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    if (this.state.stage === 0) {
        return (
          <div className="disclaimer">
            <h1 className="disclaimer-title">Disclaimer</h1>
            <p className="disclaimer-content">The results of the tasks you'll complete for Project Mnemosyne will provide information
             regarding your memory from this single timepoint. A person's individual scores can be affected by a number of reasons,
             including but not limited to stress, sleep, interest, or attention. In otherwords, we ask that you consider these results
             as a "snapshot" in time and not as an indication of overall cognitive health or ability. It is important to understand that
            these results should never be interpretedin isolation when considering a diagnosis of a memory disorder. Performance measures
            produced by these tasks are best interpreted inconjunction with a thorough patient history and clinical workup, which is not
            conducted during this study.</p>
            <Button className="test-button" onClick={this.agreedDisclaimer}>Continue</Button>
          </div>
        );
    }else if(this.state.stage === 1) {
        return (
          <div className="Form cform-border">
            <div className="cform-block">
            <p className="cform-title">Basic Information</p>
            <div className="mb-3 cform-content">

              <Row>
              <Col md={4}>
              <p className="form-title"><span className="required-star">*</span> Gender</p>
              </Col>
              <Col>
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  name="gender"
                  id="F"
                  value="Female"
                  checked={this.state.gender === "Female"}
                  onChange={this.updateField}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Male"
                  name="gender"
                  id="M"
                  value="Male"
                  checked={this.state.gender === "Male"}
                  onChange={this.updateField}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="other"
                  name="gender"
                  id="O"
                  value="Other"
                  checked={this.state.gender === "Other"}
                  onChange={this.updateField}
                />
              </Col>
              </Row>
            <Row>
            <Col md={4}>
            <p className="form-title"><span className="required-star">*</span> Age</p>
            </Col>
            <Col>
              <input type="number" name="age" onChange={this.updateField} value={this.state.age}/>
            </Col>
            </Row>
            {
              /*
              <Row>
            <Col md={4}>
              <p className="form-title">&nbsp;&nbsp; Email</p>
            </Col>
            <Col>
              <input type="text" name="email" onChange={this.updateField} value={this.state.email}/>
            </Col>
            </Row>
            */}
            </div>
            <Link to="test"><Button className="test-button" onClick={() => this.props.handlePretest(this.state.gender, this.state.age, this.state.email)}>Continue</Button></Link>

            </div>
          </div>
        );
    }
  }
}

export default withRouter(Pretest);
