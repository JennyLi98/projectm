import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/faq.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import TestImage from './TestImage.js';

class Faq extends Component {
  state=  {
    questions: [false, false, false, false, false, false]
  };

  ifShowContent = (num) => {
    let q = this.state.questions;
    q[num] = !q[num];
    this.setState({questions: q});
  }


  render() {
    return (
      <div className="disclaimer">
        <h1 className="disclaimer-title">FAQ</h1>
        <div className="faq-block">
          <p className="faq-title">
            What is Project Mnemosyne?
          </p>
        </div>
        <div className="faq-block">
          <p className="faq-title">
            Who is conducting and sponsoring Project Mnemosyne?
          </p>
        </div>
        <div className="faq-block">
          <p className="faq-title">
            What are the goals of the Project?
          </p>
        </div>
        <div className="faq-block">
          <p className="faq-title" onClick={() => this.ifShowContent(3)}>
            Will these tests tell me if I have a memory disorder?
          </p>
          {this.state.questions[3] &&
            <p className="faq-content">
            The results of the tasks you’ll complete for Project Mnemosyne will provide information regarding your memory from this single timepoint.
            A person’s individual scores can be affected by a number of reasons, including but not limited to stress, sleep, interest, or attention.
            In otherwords, we ask that you consider these results as a “snapshot” in time and not as an indication of overall cognitive health or ability.
            It is important to understand that these results should never be interpretedin isolation when considering a diagnosis of a memory disorder.
            Performance measures produced by these tasks are best interpreted inconjunction with a thorough patient history and clinical workup,
            which is not conducted during this study.
          </p>}
        </div>
        <div className="faq-block">
        <p className="faq-title" onClick={() => this.ifShowContent(4)}>
          I provided my contact information for participation in future studies but decided I no longer want to participate. How can I retract my information?
        </p>
        {this.state.questions[4] &&
        <p className="faq-content">
          You are always welcome to withdraw your contact information for future research studies. Please send an email to project-specific email
          and we will remove your information from our database.
        </p>}
        </div>
        <div className="faq-block">
        <p className="faq-title" onClick={() => this.ifShowContent(5)}>
        I said I didn’t want to participate in future studies but have changed my mind. How can I be added to the list?
        </p>
        {this.state.questions[5] &&
          <p className="faq-content">
          Thank you for your interest in future research studies!
          Please fill out the contact information form on the contact us page and you will be added to our database.
          You can choose to withdraw your contact information at any time by sending an email to project-specific email
        </p>}
        </div>
      </div>
    );
  }
}

export default Faq;
