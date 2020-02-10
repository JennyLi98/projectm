import React, { Component } from 'react';
import CardList from './CardList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import '../css/TestPage.css';
import { withRouter } from 'react-router';

class MainPage extends Component {
  constructor(){
    super();
    this.state = {
      phase: 0,
    };
  }

  render() {
    return (
      <div>
      <div id='bg'>
        <div className="main-title-d">
          <h1 id='title'>Project &nbsp;<span className= "sf">Mnemosyne</span></h1>
          <p className="sTitle">Where do your memory abilities rank compared to everyone else? </p>
        </div>
        <div className="main-title-m">
          <h1 className='title-m'>Project</h1>
          <h2 className= "sf-m">Mnemosyne</h2>
          <p className="sPhrase-m">Where do your memory abilities rank compared to everyone else? </p>
        </div>
      </div>
      <div className="introclass">
        <p className='sTitle'>Who are we?</p>
          <p className="intro">Take these three tasks to test your memory in multiple domains, and see
          how you score! Our task suite examines the what, where, and when of
          memory, providing a rich space by which to investigate memory deviations-
          from those with highly superior memory to those experiencing memory
          difficulties.
          </p>

        <Button className="testButtonDisplay" href="/about">Learn More</Button>
      </div>
      <div className="projclass">
      <CardList animals={this.props.filteredAnimals} />
      </div>
      </div>
    );
  }
}

export default withRouter(MainPage);
