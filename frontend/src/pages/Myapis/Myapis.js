
import axios from 'axios';




 import { useHistory } from 'react-router-dom';
import Api from '../../pages/Myapis/Api';
import logo from '../../images/logo.svg';
import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import '../Myapis/Myapis.css';
const Myapis = () => {
   const history = useHistory();
  const loginData = localStorage.getItem("userInfo");
    const  d  = JSON.parse(loginData)
    console.log(d);
     console.log(d[`token`])
  
    useEffect(()=>{
        if(!loginData){
                history.push("/");
        }
        const fetchData = async () => {
            const x = await axios.get(`http://localhost:3100/user/apis/${d[`token`]}`,{});
           console.log(x.data)
            console.log(x.data.length)
            setapi(x.data)
           
            }
      fetchData();
      },[])
      const [modalIsOpen, setModalIsOpen] = useState(false);
      const [api,setapi] = useState([]);
      const [addapi,setaddapi] = useState({
          name:"",
          endpoints:"",
          description:""
          
      });

      const onChangeHandler=(e) =>{
        const name= e.target.name;
        const value = e.target.value;
        const newapi={...addapi,[name]:value}
        setaddapi(newapi);
        
      }
      const Addapi= async (e) => {
        e.preventDefault();
    try {
      
        const config={
            headers: {
              "Content-type":"application/json"
            }
          }
        const {data} = await axios.post('http://localhost:3100/user/apis',{
            name:addapi.name,
            description:addapi.description,
            endpoints:addapi.endpoints,
            author:d[`token`]
        },config
        );
        console.log(data);
     
    } catch(err){
        
        alert(err);
    }
    setaddapi({
        name:"",
        description:"",
        endpoints:"",
    })
     
    window.location.reload();
          setModalIsOpen(false);
        
      };
  return (
    <div className='nav'>
         <div className='logo'>
    <img src={logo} alt=" "></img>
</div>
<h3 className='api'>My APIs</h3>
<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="modal" style={{
  overlay:{
    background: 'rgba(86, 100, 116, 0.8)'
    
  }
}}>
  <h3 className='new'>Add new API</h3>
  <form method='POST'>
    <input type='text' className='input' value={addapi.name} name="name" onChange={onChangeHandler} placeholder='API Name'></input> <br></br>
    <input type='text' className='input' value={addapi.endpoints} name="endpoints" onChange={onChangeHandler} placeholder='API End Point' ></input><br></br>
   <input type="text" className="desc" value={addapi.description} name="description" onChange={onChangeHandler} placeholder="Description of API"></input> <br></br>
    <button className='btnn' onClick={Addapi}>Add API</button>
  </form>
</Modal>

<h3 className='acc'>My Account</h3>
<button className='btn' onClick={() => setModalIsOpen(true)}>+New API</button>
    <Api cards={api} ></Api> 
    </div>
  )
}

export default Myapis