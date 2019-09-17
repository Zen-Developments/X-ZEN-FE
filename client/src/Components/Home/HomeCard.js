import React from 'react';
import { Link } from 'react-router-dom';


const HomeCard = ({props}) => (
  <div className="HomeCard">
    <div className="text">
      <h1>Howdy, I'm <span>Joshua Harris</span>.</h1>
      <br></br>
      <h2>I'm a web developer</h2>
    </div>

    <div className="cta">
      <Link to='/portfolio' className='btn'>Check out my Projects!<i class="fas fa-arrow-right"></i></Link>
    </div>
  </div>
);

export default HomeCard;
