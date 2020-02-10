import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/TestPage.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { withRouter } from 'react-router';
import {Redirect} from 'react-router-dom';
import TestImage from './TestImage.js';
import Keyboard from '../imgs/keyboard.jpg';

const testInfo = [
  {"name":"Indoor","description":"","url":"https://www.elitetrimworks.com/skin1/images/gallery/square/square%20columns_27PM.png"},
  {"name":"Outdoor","description":"","url":"https://live.staticflickr.com/3514/3810627510_d9a567624a_b.jpg"},
  {"name":"Inddor","description":"","url":"https://www.elitetrimworks.com/skin1/images/gallery/square/square_wood_columns.png"},
  {"name":"Outdoor","description":"","url":"https://upload.wikimedia.org/wikipedia/commons/1/19/Park_Square%2C_Leeds_24_March_2017.jpg"},
  {"name":"Indoor","description":"","url":"https://inhabitat.com/wp-content/blogs.dir/1/files/2014/12/Foundry-Square-living-wall-by-Habitat-Horticulture-6.jpg"},
  {"name":"Indoor","description":"","url":"https://i1.wp.com/thepointsguy.com/wp-content/uploads/2019/03/Times-Square-NYC-Edition_March-2019_NEllis-25.jpg?ssl=1"},
  {"name":"Outdoor","description":"","url":"https://mk0homznspaceco9ygoq.kinstacdn.com/wp-content/uploads/2018/09/Prestige-Park-Square-Elevation.jpg"}
];

const studyInfo = [
  {"name":"Indoor","description":"","url":"https://www.elitetrimworks.com/skin1/images/gallery/square/square%20columns_27PM.png"},
  {"name":"Outdoor","description":"","url":"https://live.staticflickr.com/3514/3810627510_d9a567624a_b.jpg"},
  {"name":"Inddor","description":"","url":"https://www.elitetrimworks.com/skin1/images/gallery/square/square_wood_columns.png"},
  {"name":"Indoor","description":"","url":"https://www.elitetrimworks.com/skin1/images/gallery/square/square%20columns_27PM.png"},
  {"name":"Indoor","description":"","url":"https://inhabitat.com/wp-content/blogs.dir/1/files/2014/12/Foundry-Square-living-wall-by-Habitat-Horticulture-6.jpg"},
  {"name":"Indoor","description":"","url":"https://i1.wp.com/thepointsguy.com/wp-content/uploads/2019/03/Times-Square-NYC-Edition_March-2019_NEllis-25.jpg?ssl=1"},
  {"name":"Outdoor","description":"","url":"https://mk0homznspaceco9ygoq.kinstacdn.com/wp-content/uploads/2018/09/Prestige-Park-Square-Elevation.jpg"}
];

class TestPage extends Component {
  constructor(){
    super();
    this.state = {
      textIdx: 0,
      finished: false,
      interval: 1000,
      time: 0,
      list: [],
      choseAnswer: false,
      intervalId: 0,
      test: false,
      second: false,
      prepare: true,
      testlist: [['alt'], ['alt']]
    };
    this.toTest = this.toTest.bind(this);
    this.toStudy = this.toStudy.bind(this);
    this.handleInterval = this.handleInterval.bind(this);
  }
  componentWillMount() {
      document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentDidMount() {
    this.setState({testlist: this.props.testlist});
  };

  handleInterval() {
    var d = new Date();
    this.setState({time: d.getTime()});
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      console.log(this.props.testlist[0].length);
      if (currentIdx === this.props.testlist[0].length * 3 - 1) {
        if (this.state.test === true) {
          this.setState({ finished: true });
        }else {
          this.setState({ second: true });
        }
          console.log(this.state.list);
      }
      this.setState({ textIdx: currentIdx + 1 });
      if(currentIdx % 3 === 2) {
        console.log(Math.floor(currentIdx / 3));

        var d = new Date();
        this.setState({time: d.getTime()});
        if(this.state.choseAnswer === false) {
          var templ = this.state.list;
          templ.push([-1, -1]);
          this.setState({list: templ});
          console.log(templ);
        }
        this.setState({choseAnswer: false});
      }
      console.log("==>" + Math.floor(currentIdx % 3));
    }, this.state.interval);

    this.setState({intervalId: this.timeout});
  }

  handleKeyDown(e) {
    var d = new Date();
    var millisec = d.getTime() - this.state.time;
    var templ = this.state.list;
    if (millisec > 2000  && this.state.choseAnswer === false) {
      console.log("longer than 2000");
      templ.push([-1, -1]);
      this.setState({list: templ});
      this.setState({choseAnswer: true});
    }
    else if(e.key === 'f'  && this.state.choseAnswer === false) {
      console.log("got f");
      var l = [0, millisec];
      console.log(l);
      templ.push(l);
      this.setState({list: templ});
      this.setState({choseAnswer: true});
    }else if (e.key === 'j' && this.state.choseAnswer === false){
      console.log("got j")
      var l = [1, millisec];
      console.log(l);
      templ.push(l);
      this.setState({list: templ});
      this.setState({choseAnswer: true});
    }
  }

  toTest(){
    console.log("test");
    this.setState({test: true});
    this.setState({second: false});
    this.setState({ textIdx: 0 });
    this.handleInterval();
  }

  toStudy(){
      console.log("study");
      console.log(this.state.testlist);
      this.setState({prepare: false});
      this.setState({ textIdx: 0 });
      this.handleInterval();
  }

  render() {
    console.log(this.props);
    let currentUrl = "";
    if (this.props.testlist !== undefined && this.props.testlist[0] !== undefined){
      console.log(this.props.testlist);
      console.log(this.props.testlist[0]);
      currentUrl = this.props.testlist[0][Math.floor(this.state.textIdx / 3)];
      if (this.state.test) {
        currentUrl = this.props.testlist[1][Math.floor(this.state.textIdx / 3)];
      }
    }
    if(this.state.prepare) {
      return (
        <div className="TestPage">
          <div className="instruction-block">
          <p className="instruction-title">Part I: </p>
          <p className="instruction">In this task you will see a series of objects, one at a time, on the screen. Your job is to decide if that object belongs indoors or outdoors using the F and J keys.
          </p>
          <p className="instruction">You will have two seconds to respond to each image. If you are unsure if an object is indoors or outdoors, make your best guess.
          </p>
          <p className="instruction">Place your index fingers on the F and J keys and try your best to keep them there throughout the task. The 'F' key is the 'Indoor' response, and the 'J' key is the 'Outdoor' response.</p>
          <img src={Keyboard} alt='cannot display' height="300px" style= {{marginBottom: 50+"px"}}/>
          </div>
          <Button onClick={this.toStudy}>Continue</Button>
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
          <Button onClick={this.toTest}>Continue</Button>
        </div>
      );
    }
    if(this.state.finished) {
      clearInterval(this.state.intervalId);
      return (
        <div className="TestPage">

          <p className="instruction-title">You have finished the test, please use the link to go back to homepage.</p>
          <Button href="/">Back to home page</Button>
        </div>
      );
    }
    else {
      return (
        <div className="TestPage">
          <p className="instruction">Please click 'F' to select the option on the left, and click 'J' to select the option on the right. {Math.floor(this.state.textIdx / 3) + 1} / 4</p>
          {this.state.textIdx % 3 !== 2 &&
            <img src={currentUrl} alt='cannot display' height="300px" width="450px"/>
          }
          {this.state.textIdx % 3 === 2 &&
            <div className="disablePage">
            </div>
          }
          <div className="option">
            <Container>
              <Row>
                <Col>
                  {!this.state.test &&
                    <Button variant="info">Indoor (F)</Button>
                  }
                  {this.state.test &&
                    <Button variant="info">New (F)</Button>
                  }
                </Col>
                <Col>
                {!this.state.test &&
                  <Button variant="info">Outdoor (J)</Button>
                }
                {this.state.test &&
                  <Button variant="info">Old (J)</Button>
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
