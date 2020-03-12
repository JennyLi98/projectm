import React from "react";
import '../css/card.css';
import BrainImg from '../imgs/brainIcon.png';
import ObjDisc from '../imgs/objdisc.png';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';

const img = [BrainImg, ObjDisc];

const Card = (props) => {
  if(props.deployed){
    return (
        <Link to="/pretest" className='te'>
        <div className='te'>
          <img src={img[props.imgid]} alt='cannot display'  className="imgDisplay"/>
          <h1>
            {props.name}
          </h1>
          <p></p>
        </div>
      </Link>
    );
  }
  return (
      <div className='te'>
        <img src={img[props.imgid]} alt='cannot display'  className="imgDisplay"/>
        <h1>
          {props.name}
        </h1>
        <p>Coming Soon</p>
      </div>
  );
}


export default withRouter(Card);
