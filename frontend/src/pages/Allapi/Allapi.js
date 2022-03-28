import React from 'react'





         //   import Apimatter from './apimatter/apimatter';
      import '../Allapi/Allapi.css';
            
  // import Allapiimg from '../../images/allapi.svg';
//import Apiimg from '../../images/hatimg.svg';
//import hat from '../../images/hat.png';
//import font from '../../images/font.png';
//import  https from '../../images/https.png';
import eagle from '../../images/eagle.jpg';
 const Allapi = (props) => {
 
 /*   const array =[
        {
           id:1,
           img:hat,
 //          head:"Background Remove",
 /////          text:"The description of the API in quick brief and we will truncate",
           
    //    },
    //    {
   //         id:2,
 //           img:font,
   //        head:"API Name",
   //        text:"The description of the API in quick brief and we will truncate",
           
  //      },
 //       {
   //         id:3,
  //          img:https,
 //          head:"API Name",
  //         text:"The description of the API in quick brief and we will truncate",
           
 //       },
 //       {
   //         id:4,
  //          img:eagle,
  //          head:"API Name",
    //        text:"The description of the API in quick brief and we will truncate",  
            
   //     },
  //        {
 //           id:5,
  //          img:hat,
  //          head:"Background Remove",
   //         text:"The description of the API in quick brief and we will truncate",
 //           
  //       },
    //     {
    //         id:6,
    //         img:font,
   //         head:"API Name",
  //          text:"The description of the API in quick brief and we will truncate",
 //           
 //        },
         {
             id:7,
             img:https,
            head:"API Name",
            text:"The description of the API in quick brief and we will truncate",
            
         },
         {
             id:8 ,
             img:eagle,
             head:"API Name",
             text:"The description of the API in quick brief and we will truncate",  
             
         }
    ]

    */
    
    return (
        <div className='Dbody'>
            <h3 className="Da1">All APIs</h3>
            <div className='Dcard-container'>
            <div className='Dcard'>
           {  props.cards.map((ele) => 
           
           ( 
               <div className='Dcar'>
             <div>  <img src={eagle} className="Dimg" alt=""></img> </div>
             <div>  <h2 className='Dhead'>   {ele.name}  </h2>  </div>
             <div>  <h3 className='Dtxt'>{ele.description} </h3>  </div>
             </div>
           )
           )} 

           </div>
           </div>
           </div>
        
    )
}

export default Allapi
