import React from 'react'
import ss from "../../images/Rectangle 724.svg";



import './../Template/Template.css';

import hatimg from '../../images/hatimg.svg';
import blue from '../../images/Rectangle 723.svg';
import Matter from '../Template/Templatematter/Templatematter';
const Template = () => {
    return (
        
        <div className='template'> 
            
            <img className="pic2" src={hatimg} ></img>
           
            <img className="pic3" src={blue}></img>
            <img className="pic1" src={ss} ></img>
            <Matter></Matter>
            
        </div>
        
    )
}

export default Template
