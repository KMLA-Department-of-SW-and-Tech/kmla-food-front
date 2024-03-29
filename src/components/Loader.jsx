import React from "react";
import ReactLoading from "react-loading";

import './Loader.css';

const Loader = ({ type, color, message }) => {
  return (
    <div className="whirl">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2>{message}</h2>
        <ReactLoading type={type} color={color} height={"80%"} width={"80%"} />
      </div>
      
    </div>
  );
}


export default Loader;