import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/TestPage.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import TestImage from './TestImage.js';

class Disclaimer extends Component {
  constructor(){
    super();
    this.state = {
      textIdx: 0,
      finished: false,
      interval: 3000,
      time: 0,
      list: [],
      choseAnswer: false,
      stage: 0,
      form: {},
      intervalId: 0,
    };
    this.agreedDisclaimer = this.agreedDisclaimer.bind(this);
  }

  agreedDisclaimer() {
    this.setState({stage: 1});
    console.log(this.state.stage);
  }

  render() {
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
      </div>
    );
  }
}

export default Disclaimer;
