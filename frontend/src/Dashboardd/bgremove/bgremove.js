





import axios from 'axios';
import { saveAs } from 'file-saver';
import { FaWindowClose } from "react-icons/fa";

import Navsection from '../../pages/Navsection/Navsection'

import React,{ useState } from 'react'

import '../bgremove/bgremove.css';
import box from '../bgremove/images/Group 29106.svg';
import hat from '../bgremove/images/Screenshot 2022-01-06 at 1.04 1.svg';
const Bgremove = () => {
    const [newImage,setnewImage] = useState(null)
//  const [file64, Setfile64] = useState("")
//  const [fileBin, SetfileBin] = useState([]);
 const [Selectedfile, Setselectedfile] = useState(false);
 const [bgimage,setbgimage] = useState([hat]);
  const uploadimgbutt = () => {
    document.getElementById("file").click();
  }
 
  const uploadimage = (event) => {
    event.preventDefault();
   // console.log(event.target.files)
const file= event.target.files[0];
console.log(file);
var fileExtension = file.name?.split('.')?.pop();
       
    if(fileExtension===undefined)
    { 
      console.log(fileExtension)
      
      return;
    }
if (fileExtension === "png" || fileExtension === "jpg" ) {
 console.log(fileExtension);
alert("yess file is accepted")  
 }else{
   console.log(fileExtension)
  alert("File does not support. You must use .png or .jpg ");
  
 }
 
console.log(file.size);
 if (file.size > 5e6) {
  window.alert("Please upload a file smaller than 5 MB");
  

  return;
 }
 Setselectedfile(file);
 const reader = new FileReader();
 reader.onload = () => {
   if(reader.readyState===2){
     setbgimage(reader.result);
   }
 }
 reader.readAsDataURL(event.target.files[0]);
  }
 const  onSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('photo',Selectedfile)
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
        responseType:"blob"
      };
      const url = 'http://localhost:3100/user/upload';

     axios.post(url, formData, config)
    .then(async (response) => {
        alert("Image Uploaded succesfully")
       const data  = await response.data;
       console.log("data: ", data)
       setnewImage(data);
      saveAs(newImage, "no-bg.png");
    })
    .catch((err) => {
      console.log('err', err);
    })
}

const close = () => {
  setbgimage(hat);
  Setselectedfile(false);
  document.getElementById("input").value=""
}

  

  return   <div className='homepage'>
<Navsection></Navsection>
<div className='division'>
 <div className='side1'>
          <div className='left'>
              <div className='onlytext'>
        <h2 className='head'>Remove image<br></br>Background</h2> 
         <h4 className='txt'>100% automatic and free</h4>
         </div>
         <img className="hat" src={bgimage} alt="hat"></img>
                </div>
      </div>
      <div className='sqr'>
        <center> <img className='box' src={box} alt=" "></img> 
      <h4 className='rightsidetext'>File should be png,jpg and <br></br>less than 5mb</h4>
  
     <input className="uplaodbutton" name="chooseimg" type="submit" value="Choose image ->" onClick={uploadimgbutt}></input> <br></br>
     <label>File name:</label>  <input type="text" name='f2' id="input" value={Selectedfile.name}></input>
  
     
     {Selectedfile && (<div><FaWindowClose className='icon' onClick={close}/></div> )}
     
      <br></br>
    
     <button className='btn' type='submit' onClick={onSubmit} >submit</button><br></br>
    
     <input type="file" id="file" accept="image/*" style={{visibility:'hidden'}} onChange={uploadimage}></input>
  
       </center>
    
    
      </div>
      </div>
  </div> 
  
    
  
}

export default Bgremove