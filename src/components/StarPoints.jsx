import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import axios from "axios";
import ShowComments from "./ShowComments";
import { Button } from "@mui/material";
import Loader from "./Loader";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";

const StarPoints = (props) => {
  const [value, setValue] = useState(5);
  const [mealData, setMealData] = useState({});
  const [isLoading, setLoading] = useState(true);
  //const [testData, setTestData] = useState({});
  const [render, setRender] = useState(1);
  const [comment, setComment] = React.useState("");

  let type = props.type;
  let urlType = props.type;
  if (type === "breakfast") {
    type = "아침";
    //urlType = "breakfast";
  } else if (type === "lunch") {
    type = "점심";
    //urlType = "lunch";
  } else if (type === "dinner") {
    type = "저녁";
    //urlType = "dinner";
  }
  //console.log(props.date.getFullYear());  //Fri Jun 24 2022 19:09:26 GMT+0900
  useEffect(() => {
    //console.log(value);
  }, [value]);

  useEffect(() => {
    //console.log(comment);
  }, [comment]);

  useEffect(() => {}, [mealData]);

  var urlDate = `${props.date.getFullYear()}-${
    props.date.getMonth() + 1
  }-${props.date.getDate()}`;

  useEffect(() => {
    axios.get(`https://api.kmlafood.com/api/meals/${urlDate}`).then((response) => {
      setMealData(response.data[0]);
      setLoading(false);
      console.log(response.data[0]);
      console.log(mealData);
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
  var mealComments = ["아직 댓글이 없습니다."];
  //console.log(mealData[urlType].comments.length);

  if (mealData[urlType].stars.length !== 0)
    starPointData = mealData[urlType].stars;
  if (mealData[urlType].comments.length !== 0)
    mealComments = mealData[urlType].comments;

  const handleUpdate = async () => {
    console.log(mealData);
    const updatedData = mealData;
    // 수정할 속성
    const updatedStars = [];
    if (starPointData[0] === 0) {
      if (value !== null) updatedStars.push(value);
    } else {
      updatedStars.push(...starPointData);
      updatedStars.push(value);
    }
    updatedData[urlType].stars = updatedStars;
    await axios.put(
      `https://api.kmlafood.com/api/meals/${mealData._id}`,
      updatedData
    );
    setRender(render + 1);
    alert("별점이 등록되었습니다");
    

    //console.log(response.data);

    // state 수정
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleComment = async () => {
    const updatedData = mealData;
    const updatedComments = [];
    if (mealComments[0] === "아직 댓글이 없습니다.") {
      updatedComments.push(comment);
    } else {
      updatedComments.push(...mealComments);
      updatedComments.push(comment);
    }
    updatedData[urlType].comments = updatedComments;
    console.log(updatedData);
    await axios.put(
      `https://api.kmlafood.com/api/meals/${mealData._id}`,
      updatedData
    );
    setComment("");

    setRender(render + 1);
    alert("댓글이 등록되었습니다.");
  };

  for (let i = 0; i < starPointData.length; i++) {
    starPointSum += starPointData[i];
  }
  //console.log(starPointSum);

  return (
    <>
      <TextField
        id="outlined-basic"
        label="급식을 평가해주세요"
        variant="outlined"
        className="textfield"
        onChange={handleChange}
        onSubmit = {handleComment}
      />
      <Button variant="outlined" className="button" onClick={handleComment}>
        입력
      </Button>
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
      <Button variant="outlined" className="button" onClick={handleUpdate}>
        평점 입력
      </Button>
      <p>평균점수: {(starPointSum / starPointData.length).toFixed(2)}점 </p>
      <h1>Today's Comments</h1>
      <ShowComments comments={mealComments} />
      <h1>Pictures</h1>
      <img src={mealData[urlType].picture}></img>
    </>
  );
};

export default StarPoints;