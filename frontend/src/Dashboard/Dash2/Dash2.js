import axios from "axios";
import React,{useState} from 'react';
import dash2 from '../../images/Rectangle 722.svg';
import {
  Link
} from "react-router-dom";
import '../Dash2/Dash2.css';
const Dash2 = () => {
  const [user, setUser] = useState({
    
    email: "",
    password: ""
  });
  const onChangeHandler = (event) =>{

    const name= event.target.name;
    const value= event.target.value;
    const newdata ={...user,[name]:value}
    setUser(newdata);
  }
   const registerUser = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:3100/user/login",user)
    setUser({
    
    email: "",
    password: ""
    })


  };
  return <div className='d2'>
<img className="login" src={dash2} alt="log"></img>
<div className='formm'>
<h3 className='acc'>Login to your account</h3>
<form onSubmit={registerUser}>
    <input type='email' value={user.email} name="email" onChange={onChangeHandler} className='input' placeholder='Email address'></input> <div></div>
    <input type='password' value={user.password} name="password" onChange={onChangeHandler} className='input' placeholder='Password'></input> <div></div>
    <Link to="/about"><input type="submit" value="login/signup" className='btnn' />  </Link> <div></div>
</form>
</div>
  </div> ;
};

export default Dash2;
