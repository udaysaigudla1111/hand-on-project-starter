import React from 'react'







import './../Template/Template.css';
import { useHistory } from 'react-router-dom';
import hatimg from "../../images/hatimg.svg";
import bluee from "../../images/blue.png";
const Template = () => {
const history= useHistory();
    return (
        
        <div className='template'> 
            
    <div> <img src={hatimg} className="hat" alt="hat"></img> </div>
  <div><img src={bluee} alt="" className='bluee'></img></div>
     <div className='text'>  <h3 className='text1'>BACKGROUND IMAGE REMOVE</h3>
        <h4 className='text2'>100% automatic and free</h4> </div> 


     <div><button  className='bgbtn' onClick={() => history.push("/bgremove")}>View App</button></div>
            </div>
       
    )
}


export default Template
