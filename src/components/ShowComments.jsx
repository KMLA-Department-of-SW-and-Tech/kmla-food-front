import React from "react";

const ShowComments = (props) => {
  const commentData = props.comments

  const commentList = commentData.map((comment, index) => (
    <li key={index}>{comment}</li>
  ));
  return <h2>{commentList}</h2>;
};

export default ShowComments;
