import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/about.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import TestImage from './TestImage.js';

class About extends Component {
  render() {
    return (
      <div className="disclaimer">

        <h1 className="about-title">Project Mnemosyne - Where do your memory abilities rank compared to everyone else?</h1>
        <p className="about-stitle">(AI Robots excluded)</p>
        <p className="about-content">Take these three tasks to test your memory in multiple domains,
        and see how you score! Our task suite examines the what, where, and when of memory,
        providing a rich space by which to investigate memory deviations-
        from those with highly superior memory to those experiencing memory difficulties.
        After completing the tasks online, you’ll be given a report on your performance
        and where you rank compared to others that have completed Project Mnemosyne.</p>
      </div>
    );
  }
}

export default About;
