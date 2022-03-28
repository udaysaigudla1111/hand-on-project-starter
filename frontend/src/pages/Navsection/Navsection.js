import logo from '../../images/logo.svg';
import myapi from '../../images/My APIs.svg';





import { useHistory } from 'react-router-dom';
import myacc from '../../images/My Account.svg';
import button from '../../images/Button (1).svg';
import './../Navsection/Navsection.css';

import React from 'react'

const Navsection = () => {
  const history = useHistory();
  const logindata = localStorage.getItem("userInfo");
    return (
        <div className='nav'>

      <div>  <img className = "logo" src = {logo} ></img> </div>

     { logindata && ( <div>   <img className="api" onClick={() => history.push("/Myapi")} src={myapi}></img>  </div>) }
    { logindata && (<div>    <img className="acc" src ={myacc} ></img>  </div>) }
     { logindata && (<div> <img className = "button" src={button}></img> </div>) }
      {!logindata && (<button className='logbtn' onClick={() => history.push("/login")}>Signup/Login</button>) }
        </div>
    )
}

export default Navsection
 {/*} onClick={() => history.push("/Myapi")} */}