import React from 'react';
import './../apimatter/apimatter.css';





import halfapi from '../../../images/halfapi.svg';

const apimatter = (props) => {
    var cls;
    var clss;
   if(props.items.id===1){
    cls='head1';
    clss='text1';
   }
    if((props.items.id)===2){
    cls='head2';
    clss='text2';
   }
    if((props.items.id)===3){
    cls='head3';
    clss='text3';
   }
    if((props.items.id)===4){
    cls='head4';
    clss='text4';
   }
    return (
        <>
      <span className={cls}>{props.items.head}</span>
      <span className={clss}>{props.items.text}</span>
      <img className ="half" src={halfapi}></img>
      
        </>
    )
}
export default apimatter
