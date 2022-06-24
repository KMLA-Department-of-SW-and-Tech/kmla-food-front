import React from "react";
import axios from "axios";

const ShowComments = (props) => {
  console.log(props.comments);
  
  const commentData = props.comments

  const commentList = commentData.map((comment, index) => (
    <li key={index}>{comment}</li>
  ));
  return <h2>{commentList}</h2>;
};

export default ShowComments;
