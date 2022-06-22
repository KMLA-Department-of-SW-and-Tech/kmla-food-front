import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Comments from "../components/Comments";
import StarPoints from "../components/StarPoints";
import Menu from "../components/Menu";

const Breakfast = (props) => {
  var date = new Date(props.date);
  //console.log(props.date);
  let URL = `https://schoolmenukr.ml/api/high/K100000414?date=${date.getDate()}&month=${date.getMonth()}`;
  const [url, setUrl] = useState(
    `https://schoolmenukr.ml/api/high/K100000414?date=${date.getDate()}`
  );
  //var breakfast = [];
  /*
  const [isLoading, setLoading] = useState(true);
  const [breakfastData, setBreakfastData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setBreakfastData(response.data.menu[0].breakfast);
      //lunch = response.data.menu[0].lunch;
      //console.log(response.data.menu[0].breakfast);
      //console.log(breakfastData);
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
  const breakfastMenuList = breakfastData.map((menu, index) => (
    <li key={index}>{menu}</li>
  ));
*/
  React.useEffect(() => {}, [url]);
  return (
    <>
      {/*<div className="App">{breakfastMenuList}</div>*/}
      <Menu menulink={url} />
      <Comments />
      <StarPoints type="breakfast" date={date} />
    </>
  );
};

export default Breakfast;
