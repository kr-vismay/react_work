import React from "react";
import Button from "./Button";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaCommentSms } from "react-icons/fa6";
function Contactdata() {

  function submit(event){
    console.log(event.target[0].value);
    console.log(event.target[1].value);
  }
  return (
    <div className="contact-data-container">
      <div className="form-container">
        <Button text={"via SMS"} icon={<FaCommentSms />} />
        <Button text={"VIA CALL"} icon={<IoCallOutline />} />
        <br></br>
        <br></br>
        <Button text={"via EMAIL"} icon={<MdOutlineMailOutline />} />
        <br></br>
        <br></br>
        <form className="form-data" onSubmit={submit}>
          <label htmlFor="name">NAME</label>
          <br></br>
          <input type="text" name="name"></input>
          <br />
          <br />
          <label>MESSAGE</label>
          <br></br>
          <input type="text"></input>
          <br></br><br></br>
          <button type="submit">SUBMIT</button>
        
        </form>
      </div>
      <div className="image-container">
        <img src="../public/contact.svg" className="contact-img"></img>
      </div>
    </div>
  );
}

export default Contactdata;
