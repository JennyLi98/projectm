import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/TestPage.css';
import {Container, Row, Col, Button, Form, Check} from 'react-bootstrap';
import { withRouter } from 'react-router';
import {Redirect} from 'react-router-dom';
import TestImage from './TestImage.js';
import DatePicker from "react-datepicker";
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
    birthday: new Date(),
    formattedDOB: "",
    gender: "Female",
    email: ""
  };

  agreedDisclaimer = () => {
    this.setState({stage: 1});
    console.log(this.state.stage);
  }

  handleChange = date => {
    if(date !== null) {
      this.setState({
        birthday: date
      });
      this.setState({
        formattedDOB: date.toISOString().slice(0,10)
      });
    }
  };

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
            <p className="disclaimer-content">&nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br />
            &nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br />
            &nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br />
            &nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button onClick={this.agreedDisclaimer}>Continue</Button>
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
            <p className="form-title"><span className="required-star">*</span> Date of Birth</p>
            </Col>
            <Col>
            <DatePicker
              selected={this.state.birthday}
              onChange={this.handleChange}
            />
            </Col>
            </Row>
            <Row>
            <Col md={4}>
              <p className="form-title">&nbsp;&nbsp; Email</p>
            </Col>
            <Col>
              <input type="text" name="email" onChange={this.updateField} value={this.state.email}/>
            </Col>
            </Row>
            </div>
            <Link to="test"><Button onClick={() => this.props.handlePretest(this.state.gender, this.state.formattedDOB, this.state.email)}>Continue</Button></Link>

            </div>
          </div>
        );
    }
  }
}

export default withRouter(Pretest);
