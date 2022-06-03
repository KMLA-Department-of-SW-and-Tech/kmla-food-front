import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';


const StarPoints = (props) => {
  const [value, setValue] = useState(5);
  let type = props.type;
  if(type === "breakfast"){
    type = "아침";
  }else if(type === "lunch"){
    type = "점심";
  }else if(type === "dinner"){
    type = "저녁";
  }

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
    <p>6/3 {type}을 평가해주세요</p>
    <Rating
      name="simple-controlled"
      value={value}
      precision={0.5}
      size = "large"
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
    <p>평균점수: 4.5점</p>
    </>
  );
};

export default StarPoints;
