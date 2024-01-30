import React from "react";

function Button({ text, icon }) {
  return (
    <button  className="btn">
      <span>{text}</span>
      <span>{icon}</span>
    </button>
  );
}

export default Button;
