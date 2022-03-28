import React,{useState} from 'react';
import axios from "axios";

import dash2 from '../../images/Rectangle 722.svg';

 // import {
 // Link
 // } from "react-router-dom";
 import { useHistory } from 'react-router-dom';
import '../Dash2/Dash2.css';
const Dash2 = () => {
  const history = useHistory()
  const [user, setUser] = useState({
    username:"",
    email: "",
    password: ""
  });
  const onChangeHandler = (event) =>{

    const name= event.target.name;
    const value= event.target.value;
    const newdata ={...user,[name]:value}
    setUser(newdata);
  }

   const postdata = async (e) => {
    e.preventDefault();
 const {username,email, password} = user;
      if( username && email && password){
     try{
       const config = {
         headers:{
          "Content-type": "application/json",
         },
       };
       
       await axios.post("http://localhost:3100/user/signup",{
         username:user.username,
         email:user.email,
         password:user.password
       },
       config
       );
console.log(user);
     } catch(err)
     {
       alert("User already exits bro");
     }
        
     }
  else {
   alert("invalid input")
 }
        setUser({
          username:"",
          email: "",
          password: "",
        });
  };
  return <div className='d2'>
<img className="login" src={dash2} alt="log"></img>
<div className='formm'>
<h3 className='acc'>Enter your credentials here</h3>
<form method="POST">
    <input type="text" value = {user.username} name="username" onChange={onChangeHandler} placeholder='your name' className='input'></input> <div></div>
    <input type='email' value={user.email} name="email" onChange={onChangeHandler} className='input' placeholder='Email address'></input> <div></div>
    <input type='password' value={user.password} name="password" onChange={onChangeHandler} className='input' placeholder='Password'></input> <div></div>

   {/* <Link to="/about"> */} <input type="submit" value="Signup" name="signup" onClick={postdata} className='btnn' /> {/* </Link> */} <div></div>
                            <div><center>OR</center></div>
                            <button className='btnn' onClick={() => history.push("/login")}>Login</button>
</form>
</div>
  </div> 
};

export default Dash2;
