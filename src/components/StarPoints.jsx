import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import axios from "axios";
import ShowComments from "./ShowComments";
import { Button } from "@mui/material";
import Loader from "../components/Loader";


const StarPoints = (props) => {
  const [value, setValue] = useState(5);
  const [mealData, setMealData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let type = props.type;
  let urlType = "";
  if (type === "breakfast") {
    type = "아침";
    urlType = "breakfast";
  } else if (type === "lunch") {
    type = "점심";
    urlType = "lunch";
  } else if (type === "dinner") {
    type = "저녁";
    urlType = "dinner";
  }
  //console.log(props.date.getFullYear());  //Fri Jun 24 2022 19:09:26 GMT+0900
  useEffect(() => {
    //console.log(value);
  }, [value]);

  useEffect(() => {}, [mealData]);

  var urlDate = `${props.date.getFullYear()}-${props.date.getMonth() + 1}-${props.date.getDate()}`;

  useEffect(() => {
    axios.get(`http://localhost:8800/api/meals/${urlDate}/${urlType}`).then((response) => {
      //console.log(response.data);
      setMealData(response.data[0]);
      setLoading(false);

    });
  }, []);
  if (isLoading) {
    return (
      <div className="App">
        <Loader type="spin" color="RGB 값" message="Loading..." />
      </div>
    );
  }

  var starPointData = [0];
  var starPointSum = 0;
  var mealComments = ["Not Found"]
  if (mealData !== undefined) starPointData = mealData.stars
  if (mealData !== undefined) mealComments = mealData.comments

  for (let i = 0; i < starPointData.length; i++) {
    starPointSum += starPointData[i];
  }
  //console.log(starPointSum);

  return (
    <>
      <p>
        {props.date.getMonth() + 1}/{props.date.getDate()} {type}을 평가해주세요
      </p>
      <Rating
        name="simple-controlled"
        value={value}
        precision={0.5}
        size="large"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Button variant="outlined" className="button">
        평점 입력
      </Button>
      <p>평균점수: {starPointSum/starPointData.length}점</p>
      <h1>Today's Comments</h1>
      <ShowComments comments = {mealComments}/>
    </>
  );
};

export default StarPoints;
