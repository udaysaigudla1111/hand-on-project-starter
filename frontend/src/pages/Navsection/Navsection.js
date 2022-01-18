import logo from '../../images/logo.svg';
import myapi from '../../images/My APIs.svg';





import myacc from '../../images/My Account.svg';
import button from '../../images/Button (1).svg';
import './../Navsection/Navsection.css';

import React from 'react'

const Navsection = () => {
    return (
        <div className='nav'>

          <img className = "logo" src = {logo} ></img>
          <img className="api" src={myapi}></img> 
          <img className="acc" src ={myacc} ></img>
          <img className = "button" src={button}></img>
        </div>
    )
}

export default Navsection
