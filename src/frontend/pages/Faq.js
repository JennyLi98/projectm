import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/faq.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import TestImage from './TestImage.js';

class Faq extends Component {
  state=  {
    questions: [false, false, false, false, false]
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
          <p className="faq-title" onClick={() => this.ifShowContent(0)}>
            What is Project Mnemosyne and what are its goals?
          </p>
          {this.state.questions[0] &&
            <p className="faq-content">
            PM is a research study aiming to collect a whole bunch of data relating to how people of all ages, genders, nationalities, cognitive
            health, etc perform on a suite of three computer tasks designed to be highly sensitive at examining differences in memory processes,
            which will provide a rich space by which to investigate memory abnormalities. The hope is that we can make these tasks so sensitive and
            collect enough data to be able to predict the beginnings of cognitive decline much earlier than we currently can, absent of a
            neurological exam, invasive blood tests, or expensive neuroimaging procedures.
          </p>}
        </div>
        <div className="faq-block">
          <p className="faq-title" onClick={() => this.ifShowContent(1)}>
            Who is conducting and sponsoring Project Mnemosyne?
          </p>
          {this.state.questions[1] &&
            <p className="faq-content">
            The Translational Neurobiology Laboratory at UC Irivne is led by Dr. Michael Yassa, a neuroscientist and Professor in the Department of
            Neurobiology and Behavior. PM is a collaborative project between the Yassa Lab at UCI and Signa Therapeutics, LLC, an innovative clinical
             development CNS (central nervous system) biopharmaceutical company targeting vulnerable brain circuits disrupted in a wide range of brain
              disorders.
          </p>}
        </div>
        <div className="faq-block">
          <p className="faq-title" onClick={() => this.ifShowContent(2)}>
            Will these tests tell me if I have a memory disorder?
          </p>
          {this.state.questions[2] &&
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
        <p className="faq-title" onClick={() => this.ifShowContent(3)}>
          I provided my contact information for participation in future studies but decided I no longer want to participate. How can I retract my information?
        </p>
        {this.state.questions[3] &&
        <p className="faq-content">
          You are always welcome to withdraw your contact information for future research studies. Please send an email to project-specific email
          and we will remove your information from our database.
        </p>}
        </div>
        <div className="faq-block">
        <p className="faq-title" onClick={() => this.ifShowContent(4)}>
        I said I didn’t want to participate in future studies but have changed my mind. How can I be added to the list?
        </p>
        {this.state.questions[4] &&
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
