import React, { useRef, useState } from 'react'

import Dislay from './Dislay';
function Inputdata() {

  const [myname,setname]=useState("");
   const [myemail,setemail]=useState("");
   const [detail,setdetails]=useState([]);
   console.log("🚀 ~ Inputdata ~ detail:", detail)

    function collect(event){
        // console.log(myname);
        // console.log(myemail);
        const update = [...detail,{data:myname,emailadd:myemail}];
        setdetails(update);
        
    }
    
 function displayname(event){
  setname(event.target.value);
 }
 function displayemail(event){
  setemail(event.target.value)
 }
   
   
  return (
    <>
    
    <label htmlFor='name'>NAME</label><br/>
    <input type='text' name='name' value={myname} onChange={displayname}></input><br/><br/>
    <label htmlFor='email'>EMAIL</label><br/>
    <input type='text' name='email' value={myemail} onChange={displayemail}></input><br></br><br></br>
    <button onClick={collect}>SUBMIT</button>
    <Dislay items = {detail}/>
    </>
  )
}

export default Inputdata