import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button, Row, Col} from 'react-bootstrap';
import './css/App.css';
//import {animals} from './animals';
// import logo from 'logo.svg';
import SearchBox from './pages/SearchBox';

import TestPage from './pages/TestPage.js';
import TestList from './pages/TestList.js';
import MainPage from './pages/MainPage.js';
import Disclaimer from './pages/Disclaimer.js';
import About from './pages/About.js';
import Faq from './pages/Faq.js';
import Pretest from './pages/Pretest.js';
import Contact from './pages/Contact.js';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Test from "./services/test";
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
      testlist: []
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  handlePretest = (gender, birthday, email) => {
    console.log(gender);
    console.log(birthday);
    console.log(email);
    this.setState({gender: gender});
    this.setState({birthday: birthday});

    Test.user(email, birthday, gender)
      .then(response => {
        console.log(response);
        console.log(response.data.user_id);
        this.setState({uid: response.data.user_id});
        Test.getMDTO(response.data.user_id)
          .then(response => {
          console.log(response.data);
          this.setState({testlist: response.data});
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
    var testInfo = [
      {"name":"Indoor","description":"","url":"https://www.elitetrimworks.com/skin1/images/gallery/square/square%20columns_27PM.png"},
      {"name":"Outdoor","description":"","url":"https://live.staticflickr.com/3514/3810627510_d9a567624a_b.jpg"},
      {"name":"Inddor","description":"","url":"https://www.elitetrimworks.com/skin1/images/gallery/square/square_wood_columns.png"},
      {"name":"Outdoor","description":"","url":"https://upload.wikimedia.org/wikipedia/commons/1/19/Park_Square%2C_Leeds_24_March_2017.jpg"},
      {"name":"Indoor","description":"","url":"https://inhabitat.com/wp-content/blogs.dir/1/files/2014/12/Foundry-Square-living-wall-by-Habitat-Horticulture-6.jpg"},
      {"name":"Indoor","description":"","url":"https://i1.wp.com/thepointsguy.com/wp-content/uploads/2019/03/Times-Square-NYC-Edition_March-2019_NEllis-25.jpg?ssl=1"},
      {"name":"Outdoor","description":"","url":"https://mk0homznspaceco9ygoq.kinstacdn.com/wp-content/uploads/2018/09/Prestige-Park-Square-Elevation.jpg"}];
    this.setState({testInfo: testInfo});
    var animalsVar = [
      {
        "name":"Object Discrimination",
        "imgid": 1,
        "url":"https://image.freepik.com/free-vector/vintage-glass-dome-wooden-tray-realistic_107791-236.jpg"
      },
      {
        "name":"Coming Soon",
        "imgid": 0,
        "url":"https://image.freepik.com/free-vector/multicolored-soap-bubbles_87720-2519.jpg"
      },
      {
        "name":"Coming Soon",
        "imgid": 0,
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
              <img src="http://pngimg.com/uploads/letter_m/letter_m_PNG91.png" width="50px" style={{marginRight: 50+'px'}}/>
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
                  <TestPage testlist={this.state.testlist}/>
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
          Project Mnemosyne is a research study by Signa Therapeutics, LLC and the University of California, Irvine.
          </p>
          </div>
        </footer>
    </div>
    );
  }
}

export default App;
