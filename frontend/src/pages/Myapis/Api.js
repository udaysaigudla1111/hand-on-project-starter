import React from 'react'
import '../Myapis/Api.css';






//import hat from '../../images/hat.png';
import '../../pages/Myapis/Api'
const Api = (props) => {
  return (
    <div className='Myapiapii'>  
    <div className='Myapicard-container'>
{
    props.cards.map(
        (ele) => (
            <div className='Myapicard' key={ele._id}>
                         
           <div> <img className='Myapiimg' src={"/hat.png"} alt=" "></img> </div>

<div className='Myapihead'>  {ele.name} </div>
<div className='Myapitext'>  {ele.description}  
    </div>
    </div>
        )
    )
}
        </div>
        </div>
  )
};

export default Api