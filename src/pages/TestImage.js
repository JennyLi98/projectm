import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/TestPage.css';

class TestImage extends Component {
  constructor(){
    super();
    this.state = {
      phase: 0,
    };
  }

  componentDidMount() {

    setInterval(() => {
      this.setState({phase: ((this.state.phase) + 1) % 3});
    }, 1000);
  };

  render() {
    if (this.state.phase != 2) {
      return (
        <div>
          <img src={this.props.url} alt='cannot display' height="300px" width="300px"/>
        </div>
      );
    } else {
      return (
        <div className="disablePage">
        </div>
      );
    }
  }
}

export default TestImage;
