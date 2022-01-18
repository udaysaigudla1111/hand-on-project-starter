import React from 'react'

import Apimatter from './apimatter/apimatter';
import '../Allapi/Allapi.css';
import Allapiimg from '../../images/allapi.svg';
const Allapi = () => {
    const array =[
        {
           id:1,
           head:"Background Remove",
           text:"The description of the API in quick brief and we will truncate",
        },
        {
            id:2,
           head:"API Name",
           text:"The description of the API in quick brief and we will truncate",
        },
        {
            id:3,
           head:"API Name",
           text:"The description of the API in quick brief and we will truncate",
        },
        {
            id:4,
            head:"API Name",
            text:"The description of the API in quick brief and we will truncate",  
        }
    ]
    return (
        <div className='api'>
            <h3 className="a1">All APIs</h3>
            <img className="imgapi" src={Allapiimg}></img>
           {array.map((ele,index) => <Apimatter key={index} items={ele} ></Apimatter>)} 
           
        </div>
    )
}

export default Allapi
