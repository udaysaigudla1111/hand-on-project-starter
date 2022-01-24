import React,{useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";





import Dash1 from "../Dashboard/Dashboard"
import axios from "axios";
import dash22 from "../images/Rectangle 722.svg";


 // import {
 // Link
 // } from "react-router-dom";
import '../Loogin/Loogin.css';
const Loogin = () => {
  const history = useHistory()
  useEffect(() => {
    const logged = localStorage.getItem("userInfo");
    if(logged){
      history.push("/dashboard");
    }
  });
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
   const postdata = async (e) => {
    e.preventDefault();
    
 
      try{
        const config={
          headers: {
            "Content-type":"application/json"
          }
        }

          const { data } = await axios.post("http://localhost:3100/user/login",
          {
              email:user.email,
              password:user.password,
          },
          config
          );
            console.log(data)
      localStorage.setItem('userInfo',JSON.stringify(data))
      }catch (error) {
          alert(error)
      }
       setUser({
          email: "",
          password: "",
        });
      
  };
  return <div className='d22'>
    <Dash1></Dash1>
<img className="loginn" src={dash22} alt="log"></img>
<div className='formmm'>
<h3 className='accc'>Login to your account</h3>
<form method="POST">
    <input type='email' value={user.email} name="email" onChange={onChangeHandler} className='inputt' placeholder='Email address'></input> <div></div>
    <input type='password' value={user.password} name="password" onChange={onChangeHandler} className='inputt' placeholder='Password'></input> <div></div>

   {/* <Link to="/about"> */} <input type="submit" value="Login" name="signup" onClick={postdata} className='btnnn' /> {/* </Link> */} <div></div>
                            <div><center>OR</center></div>
                      <button className='btnnn' onClick={() => history.push("/signup")}>Signup</button>
</form>
</div>
  </div> 
};

export default Loogin;
