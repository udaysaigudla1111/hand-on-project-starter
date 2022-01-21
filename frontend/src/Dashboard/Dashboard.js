import React from 'react';






import ellipse from '../images/Ellipse 86.svg';
import Rect from '../images/Rectangle 196.svg';
import '../Dashboard/Dashboard.css';
const Dashboard = () => {
  return <div className='Dashboard'>
      <img  className = 'round' src={ellipse} alt = "round" ></img>
      <img className='rect' src={Rect} alt="bg"></img>
      <h2 className='d1' >Welcome to your Dashboard</h2>
      <p className='d2'>Your uploaded APIs will be 
displayed here once you login to your 
account</p>
  </div>;
};

export default Dashboard;
