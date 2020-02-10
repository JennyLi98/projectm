import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/contact.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import TestImage from './TestImage.js';

class Contact extends Component {
  render() {
    return (
      <div className="contact-block">

        <p className="contact-content">Project Mnemosyne</p>
        <p className="contact-content">Ph: (949) 824-3919</p>
        <p className="contact-content">Email: project-specific email</p>

      </div>
    );
  }
}

export default Contact;
