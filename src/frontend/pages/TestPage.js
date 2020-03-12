import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/TestPage.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { withRouter } from 'react-router';
import {Redirect} from 'react-router-dom';
import ResultList from './ResultList.js';
import Keyboard from '../imgs/keyboard.jpg';
import Test from "../services/test";

const testInfo = [
  {"name":"Indoor","description":"","url":"https://www.elitetrimworks.com/skin1/images/gallery/square/square%20columns_27PM.png"},
  {"name":"Outdoor","description":"","url":"https://live.staticflickr.com/3514/3810627510_d9a567624a_b.jpg"},
  {"name":"Inddor","description":"","url":"https://www.elitetrimworks.com/skin1/images/gallery/square/square_wood_columns.png"}
];

const studyInfo = [
  {"name":"Indoor","description":"","url":"https://www.elitetrimworks.com/skin1/images/gallery/square/square%20columns_27PM.png"},
  {"name":"Outdoor","description":"","url":"https://live.staticflickr.com/3514/3810627510_d9a567624a_b.jpg"},
  {"name":"Outdoor","description":"","url":"https://live.staticflickr.com/3514/3810627510_d9a567624a_b.jpg"}
];

class TestPage extends Component {
  constructor(){
    super();
    this.state = {
      textIdx: 0,
      finished: false,
      interval: 1000,
      time: 0,
      slist: [],
      list:[],
      choseAnswer: false,
      intervalId: 0,
      test: false,
      second: false,
      prepare: false,
      showSecs: 5,
      tprep: true, //prepare page for trial
      ttest: false,
      tstudy: false,
      tSecond: false,
      tResult: false,
      buttonpress: false,
      fpress: false,
      jpress: false,
      testlist: [['alt'], ['alt']],
      curlistlen: 0,
      percCorrect: 0.0
    };
    this.toTest = this.toTest.bind(this);
    this.toStudy = this.toStudy.bind(this);
    this.toReal = this.toReal.bind(this);
    this.toTrialTest = this.toTrialTest.bind(this);
    this.toTrialStudy = this.toTrialStudy.bind(this);
    this.handleInterval = this.handleInterval.bind(this);
    this.sendResult = this.sendResult.bind(this);
  }
  componentWillMount() {
      document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleInterval() {
    var d = new Date();
    this.setState({time: d.getTime()});
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      console.log(currentIdx % this.state.showSecs);
      if (this.props.plist.length != 0 && (this.state.ttest || this.state.tstudy) && currentIdx === this.state.curlistlen * this.state.showSecs - 1) {
        if (this.state.ttest === true) {
          this.setState({ ttest: false });
          this.setState({ tResult: true });
        }else {
          this.setState({ tSecond: true });
          this.setState({ tstudy: false });
        }
      }
      else if (!this.state.ttest && !this.state.tstudy && currentIdx === this.state.curlistlen * this.state.showSecs - 1) {
        console.log("need to finish now");
        if (this.state.test === true) {
          this.setState({ finished: true });
          this.sendResult();
        }else {
          this.setState({ second: true });
        }
          console.log(this.state.list);
      }
      this.setState({ textIdx: currentIdx + 1 });
      if(currentIdx % this.state.showSecs === this.state.showSecs - 1) {

        var d = new Date();
        this.setState({time: d.getTime()});
        if(this.state.choseAnswer === false) {
          var templ = this.state.list;
          templ.push([-1, -1]);
          this.setState({list: templ});
        }
        this.setState({choseAnswer: false});
      }
    }, this.state.interval);

    this.setState({intervalId: this.timeout});
  }

  handleKeyDown(e) {
    var d = new Date();
    var millisec = d.getTime() - this.state.time;
    var templ = this.state.list;
    if (millisec > 4000  && this.state.choseAnswer === false && e.keyCode !== 32) {
      templ.push([-1, -1]);
      this.setState({list: templ});
      this.setState({choseAnswer: true});
    }
    else if(e.key === 'f'  && this.state.choseAnswer === false) {
      var l = [0, millisec];
      templ.push(l);
      this.setState({list: templ});
      this.setState({choseAnswer: true});
    }else if (e.key === 'j' && this.state.choseAnswer === false){
      var l = [1, millisec];
      templ.push(l);
      this.setState({list: templ});
      this.setState({choseAnswer: true});
    }else if (this.props.plist.length !== 0 && e.keyCode === 32){
      e.preventDefault();
      console.log(this.props.plist);
      this.setState({buttonpress: true},
      () => {
        setTimeout(
        () => {
          if (this.state.tprep === true) {
            this.toTrialStudy();
          }
          else if (this.state.tSecond === true) {
            this.toTrialTest();
          }
          else if (this.state.tResult === true) {
            this.toReal();
          }
          else if (this.state.prepare == true) {
            this.toStudy();
          }
          else if (this.state.second === true) {
            this.toTest();
          }
          this.setState({buttonpress:false});
          window.scrollTo(0, 0);
        }, 1000);
      });
    }
    if (e.key === "j"){
      this.setState({jpress: true},
      () => {
        setTimeout(() => {
          this.setState({jpress:false});
        }, 1000);
      });
    }
    if (e.key === "f"){
      this.setState({fpress: true},
      () => {
        setTimeout(() => {
          this.setState({fpress:false});
        }, 1000);
      });
    }
  }

  toTest(){
    this.setState({slist: this.state.list});
    this.setState({list: []});
    this.setState({curlistlen: this.props.testlist[1].length});
    this.setState({test: true});
    this.setState({second: false});
    this.setState({ textIdx: 0 });
    this.handleInterval();
  }

  toStudy(){
      this.setState({curlistlen: this.props.testlist[0].length});
      this.setState({prepare: false});
      this.setState({ textIdx: 0 });
      this.handleInterval();
  }

  toTrialTest(){
    this.setState({curlistlen: this.props.plist[1].length});
    this.setState({ttest: true});
    this.setState({tSecond: false});
    this.setState({ textIdx: 0 });
    this.handleInterval();
  }

  toTrialStudy(event){
    this.setState({curlistlen: this.props.plist[0].length});
    this.setState({tprep: false});
    this.setState({tstudy: true});
    this.setState({ textIdx: 0 });
    this.handleInterval();
  }

  toReal(){
      this.setState({prepare: true});
      this.setState({tResult: false});
      this.setState({list: []});
  }

  sendResult(){
      var skey = {
        indoor: 0,
        outdoor: 1
      };
      var tkey = {
        old: 0,
        new: 1
      };
      Test.resultMDTO(skey, tkey, this.state.slist, this.state.list)
      .then(response => {
        console.log(response.data);
        this.setState({percCorrect: response.data.percCorrect});
      })
      .catch(error => console.log(error));
  }

  render() {
    let currentUrl = "";
    if ((this.state.ttest || this.state.tstudy) || (this.props.testlist !== undefined && this.props.testlist[0] !== undefined)){
      if (this.state.test) {
        currentUrl = this.props.testlist[1][Math.floor(this.state.textIdx / this.state.showSecs)];
      }
      else if (this.state.ttest) {
        currentUrl = this.props.plist[1][Math.floor(this.state.textIdx / this.state.showSecs)];
      }
      else if (this.state.tstudy) {
        currentUrl = this.props.plist[0][Math.floor(this.state.textIdx / this.state.showSecs)];
      }
      else {
        currentUrl = this.props.testlist[0][Math.floor(this.state.textIdx / this.state.showSecs)];
      }
    }
    if(this.state.tprep) {
      return (
        <div className="TestPage">
          <div className="instruction-block">
          <p className="instruction-title">Practice Part I: </p>
          <div className="instruction">
          <p>In this task you will see a series of objects, one at a time, on the screen. Your job is to decide if that object belongs indoors or outdoors using the F and J keys.
          </p>
          <p>You will have two seconds to respond to each image. If you are unsure if an object is indoors or outdoors, make your best guess.
          </p>
          <p>Place your index fingers on the F and J keys and try your best to keep them there throughout the task. The 'F' key is the 'Indoor' response, and the 'J' key is the 'Outdoor' response.</p>
          </div>
          <img src={Keyboard} alt='cannot display' height="300px" style= {{marginBottom: 50+"px"}}/>
          </div>
          {this.state.buttonpress &&
            <Button className="test-button-pressed" onClick={this.toTrialStudy}>Press 'Space' to practice!</Button>
          }
          {!this.state.buttonpress &&
            <Button className="test-button" onClick={this.toTrialStudy}>Press 'Space' to practice!</Button>
          }
        </div>
      );
    }
    if(this.state.prepare) {
      return (
        <div className="TestPage">
          <div className="instruction-block">
          <p className="instruction-title">Part I: </p>
          <div className="instruction">
          <p>In this task you will see a series of objects, one at a time, on the screen. Your job is to decide if that object belongs indoors or outdoors using the F and J keys.
          </p>
          <p>You will have two seconds to respond to each image. If you are unsure if an object is indoors or outdoors, make your best guess.
          </p>
          <p>Place your index fingers on the F and J keys and try your best to keep them there throughout the task. The 'F' key is the 'Indoor' response, and the 'J' key is the 'Outdoor' response.</p>
          </div>
          <img src={Keyboard} alt='cannot display' height="300px" style= {{marginBottom: 50+"px"}}/>
          </div>
          {this.state.buttonpress &&
            <Button className="test-button-pressed" onClick={this.toStudy}>Press 'Space' to Continue</Button>
          }
          {!this.state.buttonpress &&
            <Button className="test-button" onClick={this.toStudy}>Press 'Space' to Continue</Button>
          }

        </div>
      );
    }
    if(this.state.tSecond) {
      clearInterval(this.state.intervalId);
      return (
        <div className="TestPage">
          <div className="instruction-block">
          <p className="instruction instruction-title">Practice Part II: </p>
          <div className="instruction">
          <p>Now you will see another series of objects, one at a time. This time your job is to decide if you have seen that object in the previous series.
          </p>
          <p>Some objects will be exactly the same, and so you will answer "Old".
          Some objects will be different, and so you will answer "New". Some objects may look similar, but not exactly the same. For those, you will still answer "New".
          </p>
          <p>For example, say you saw a red apple before, and now you see a green apple; you would count this as "new". If you are unsure, just make your best guess.
          </p>
          <p>
          Like before, you will have 2 seconds to respond to each image. Try your best to keep your fingers on the F and J keys. The 'F' key is the 'New' response, and the 'J' key is the 'Old' response.</p>
          </div>
          <img src={Keyboard} alt='cannot display' height="300px" style= {{marginBottom: 50+"px"}}/>
          </div>
          {this.state.buttonpress &&
            <Button className="test-button-pressed" onClick={this.toTrialTest}>Press 'Space' to Continue</Button>
          }
          {!this.state.buttonpress &&
            <Button className="test-button" onClick={this.toTrialTest}>Press 'Space' to Continue</Button>
          }

        </div>
      );
    }
    if(this.state.second) {
      clearInterval(this.state.intervalId);
      return (
        <div className="TestPage">
          <div className="instruction-block">
          <p className="instruction instruction-title">Part II: </p>
          <div className="instruction">
          <p>Now you will see another series of objects, one at a time. This time your job is to decide if you have seen that object in the previous series.
          </p>
          <p>Some objects will be exactly the same, and so you will answer "Old".
          Some objects will be different, and so you will answer "New". Some objects may look similar, but not exactly the same. For those, you will still answer "New".
          </p>
          <p>For example, say you saw a red apple before, and now you see a green apple; you would count this as "new". If you are unsure, just make your best guess.
          </p>
          <p>
          Like before, you will have 2 seconds to respond to each image. Try your best to keep your fingers on the F and J keys. The 'F' key is the 'New' response, and the 'J' key is the 'Old' response.</p>
          </div>
          <img src={Keyboard} alt='cannot display' height="300px" style= {{marginBottom: 50+"px"}}/>
          </div>
          {this.state.buttonpress &&
            <Button  className="test-button-pressed" onClick={this.toTest}>Press 'Space' to Continue</Button>
          }
          {!this.state.buttonpress &&
            <Button  className="test-button" onClick={this.toTest}>Press 'Space' to Continue</Button>
          }

        </div>
      );
    }
    if(this.state.finished) {
      clearInterval(this.state.intervalId);
      return (
        <div className="TestPage">
          <p className="instruction-title">Congratulations on finishing the test! You got {this.state.percCorrect * 100} % of the images correct. Great job!</p>
          <Button className="test-button" href="/">Back to home page</Button>
        </div>
      );
    }
    if(this.state.tResult) {
      clearInterval(this.state.intervalId);
      return (
        <div className="TResultPage">
          <p className="instruction-title">Here are the images you saw:</p>
          <ResultList study={this.props.plist[0]} test={this.props.plist[1]} />
          <p className="instruction-title">Ready for a real challenge?</p>
          {this.state.buttonpress &&
            <Button className="test-button-pressed" onClick={this.toReal}>Press 'Space' to Continue</Button>
          }
          {!this.state.buttonpress &&
            <Button className="test-button" onClick={this.toReal}>Press 'Space' to Continue</Button>
          }
          <p className="instruction-title"></p>
        </div>
      );
    }
    else {
      return (
        <div className="TestPage">
          {(this.state.ttest || this.state.tstudy) &&
              <p className="instruction">Please click 'F' to select the option on the left, and click 'J' to select the option on the right. {Math.floor(this.state.textIdx / this.state.showSecs) + 1} / {this.state.curlistlen}</p>
          }
          {!this.state.ttest && !this.state.tstudy && (this.props.testlist !== undefined && this.props.testlist[0] !== undefined) &&
              <p className="instruction">Please click 'F' to select the option on the left, and click 'J' to select the option on the right. {Math.floor(this.state.textIdx / this.state.showSecs) + 1} / {this.state.curlistlen}</p>
          }
          {this.state.textIdx % this.state.showSecs < this.state.showSecs - 2 &&
            <img src={currentUrl} alt='cannot display' height="300px" width="450px"/>
          }
          {this.state.textIdx % this.state.showSecs === this.state.showSecs - 2 &&
            <img src={currentUrl} alt='cannot display' height="300px" width="450px" className="fade-out"/>
          }
          {this.state.textIdx % this.state.showSecs === this.state.showSecs - 1 &&
            <div className="disablePage">
            </div>
          }
          <div className="option">
            <Container>
              <Row>
                <Col>
                  {!(this.state.test || this.state.ttest) && this.state.fpress &&
                    <Button className="test-button-pressed" variant="info">Indoor (F)</Button>
                  }
                  {!(this.state.test || this.state.ttest) && !this.state.fpress &&
                    <Button className="test-button" variant="info">Indoor (F)</Button>
                  }
                  {(this.state.test || this.state.ttest) && this.state.fpress &&
                    <Button className="test-button-pressed" variant="info">New (F)</Button>
                  }
                  {(this.state.test || this.state.ttest) && !this.state.fpress &&
                    <Button className="test-button" variant="info">New (F)</Button>
                  }
                </Col>
                <Col>
                {!(this.state.test || this.state.ttest) && this.state.jpress &&
                  <Button className="test-button-pressed" variant="info">Outdoor (J)</Button>
                }
                {!(this.state.test || this.state.ttest) && !this.state.jpress &&
                  <Button className="test-button" variant="info">Outdoor (J)</Button>
                }
                {(this.state.test || this.state.ttest) && this.state.jpress &&
                  <Button className="test-button-pressed" variant="info">Old (J)</Button>
                }
                {(this.state.test || this.state.ttest) && !this.state.jpress &&
                  <Button className="test-button" variant="info">Old (J)</Button>
                }
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(TestPage);
