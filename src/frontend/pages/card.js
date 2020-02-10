import React from "react";
import '../css/card.css';
import BrainImg from '../imgs/brainIcon.png';
import ObjDisc from '../imgs/objdisc.png';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';

const img = [BrainImg, ObjDisc];

const Card = (props) => {
  return (
    <Link to="/pretest" className='te'>
      <div className='te'>
        <img src={img[props.imgid]} alt='cannot display'  className="imgDisplay"/>
        <h1>
          {props.name}
        </h1>
      </div>
    </Link>
  );
}


export default withRouter(Card);
