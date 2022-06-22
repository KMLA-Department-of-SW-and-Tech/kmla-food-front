import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";

//import "./components.css";

const Comments = () => {
  const [comment, setComment] = React.useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  useEffect(() => {
    //console.log(comment);
  }, [comment]);

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="급식을 평가해주세요"
        variant="outlined"
        className="textfield"
        onChange = {handleChange}
      />
      <Button variant="outlined" className="button">
        입력
      </Button>
    </div>
  );
};

export default Comments;
