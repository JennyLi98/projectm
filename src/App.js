import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button, Row, Col} from 'react-bootstrap';
import './frontend/css/App.css';
//import {animals} from './animals';
// import logo from 'logo.svg';
import SearchBox from './frontend/pages/SearchBox';

import TestPage from './frontend/pages/TestPage.js';
import TestList from './frontend/pages/TestList.js';
import MainPage from './frontend/pages/MainPage.js';
import Disclaimer from './frontend/pages/Disclaimer.js';
import About from './frontend/pages/About.js';
import Faq from './frontend/pages/Faq.js';
import Pretest from './frontend/pages/Pretest.js';
import Contact from './frontend/pages/Contact.js';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Test from "./frontend/services/test";
import MLogo from './frontend/imgs/letter_m_blue.png';
import Socket from "./frontend/util/Socket";

const testInfo =
[
  [
  "https://www.elitetrimworks.com/skin1/images/gallery/square/square%20columns_27PM.png"
  ],
[
  "https://live.staticflickr.com/3514/3810627510_d9a567624a_b.jpg"
  ]
];

class App extends Component {
  constructor(){
    super();
    this.state={
      animals: [],
      searchfield: '',
      testInfo: [],
      gender: "",
      birthday: Date(),
      uid: null,
      testlist: [],
      plist:[]
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  handlePretest = (gender, age, email) => {
    console.log(gender);
    console.log(age);
    this.setState({gender: gender});
    this.setState({age: age});

    Test.user(age, gender)
      .then(response => {
        console.log(response);
        console.log(response.data.token);
        Socket.setHeader(response.data.token);
        Test.getMDTO()
          .then(response => {
          console.log(response);
          console.log(response.data);
          this.setState({testlist: response.data});
        })
        .catch(error => console.log(error));
        Test.getPMDTO()
          .then(response => {
          console.log(response);
          console.log(response.data);
          this.setState({plist: response.data});
        })
        .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
    /*
    Test.test()
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));*/
  };

  componentDidMount(){

    this.setState({testInfo: testInfo});
    var animalsVar = [
      {
        "name":"Object Discrimination",
        "imgid": 1,
        "deployed": true,
        "url":"https://image.freepik.com/free-vector/vintage-glass-dome-wooden-tray-realistic_107791-236.jpg"
      },
      {
        "name":"Spatial Discrimination",
        "imgid": 0,
        "deployed": false,
        "url":"https://image.freepik.com/free-vector/multicolored-soap-bubbles_87720-2519.jpg"
      },
      {
        "name":"Temporal Discrimination",
        "imgid": 0,
        "deployed": false,
        "url":"logo192.png"
      }];
    this.setState({animals: animalsVar});
  }



  render() {
    const filteredAnimals = this.state.animals.filter(
      animal =>{
        return animal.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      });
    return (
      <div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="content-wrapper">
          <BrowserRouter>
            <Navbar style={{backgroundColor: 'black'}} variant="dark" expand="md">
              <img src={MLogo} width="50px" style={{marginRight: 50+'px'}}/>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/" style={{fontSize: 20+'px'}}>Home</Nav.Link>
                  <Nav.Link href="/about" style={{fontSize: 20+'px'}}>About</Nav.Link>
                  <Nav.Link href="/faq" style={{fontSize: 20+'px'}}>FAQ</Nav.Link>
                  <Nav.Link href="/contact" style={{fontSize: 20+'px'}}>Contact</Nav.Link>
                </Nav>
                <Button variant="warning" className="nav-testbutton" href="/pretest">Start Test</Button>
              </Navbar.Collapse>
            </Navbar>
            <div>
              <Route exact={true} path='/' render={() => (
                  <MainPage filteredAnimals = {filteredAnimals}/>
              )}/>
              <Route path='/pretest' render={() => (
                <div>
                  <Pretest test={this.state.testInfo} handlePretest={this.handlePretest}/>
                </div>
              )}/>
              <Route path='/test' render={() => (
                <div>
                  <TestPage testlist={this.state.testlist} plist={this.state.plist}/>
                </div>
              )}/>
              <Route path='/testlist' render={() => (
                <div>
                  <TestList />
                </div>
              )}/>
              <Route path='/disclaimer' render={() => (
                <div>
                  <Disclaimer />
                </div>
              )}/>
              <Route path='/faq' render={() => (
                <div>
                  <Faq />
                </div>
              )}/>
              <Route exact={true} path='/about' render={() => (
                <About />
              )}/>
              <Route exact={true} path='/contact' render={() => (
                <Contact />
              )}/>
              <Route path='/wiki-page' component={() => { window.location = 'https://faculty.sites.uci.edu/myassa/'; return null;} }/>
            </div>
          </BrowserRouter>
          <div className="push"></div>
        </div>
        <footer className="footer">
          <div className="footer-content">
          {/*<p>Email: projectm@gmail.com</p>
          <p>Partners：
            <span><a href="https://faculty.sites.uci.edu/myassa/">Yassa Lab</a></span>
          </p>*/}
          <p>
          © Copyright 2019, Project Mnemosyne.
          </p>
          <p>
          All Rights Reserved.
          </p>
          <p>
          Project Mnemosyne is a research study by the University of California, Irvine.
          </p>
          </div>
        </footer>
    </div>
    );
  }
}

export default App;
