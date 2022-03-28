import React,{useState,useEffect} from 'react';






 
import Navsection from '../pages/Navsection/Navsection';
import Allapi from '../pages/Allapi/Allapi';
import axios from 'axios';
import Template from '../pages/Template/Template';
 
const Dashboardd = () => {
  useEffect(()=>{
   
    const fetchData = async () =>{
    const data = await axios.get('http://localhost:3100/user/apis',{});
    console.log(data.data);
    setcard(data.data);
    }
    fetchData();
  },[])
  const [card,setcard] = useState([]);
  return <div>
     <div><Navsection></Navsection> </div>
    <div>  <Template></Template>  </div>   
     <Allapi cards={card} ></Allapi>    
  </div>;
};

export default Dashboardd;
