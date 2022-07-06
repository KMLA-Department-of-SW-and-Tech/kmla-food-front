import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import StarPoints from "../components/StarPoints";

const Breakfast = (props) => { 

  var date = new Date(props.date);

  const url = `https://schoolmenukr.ml/api/high/K100000414?date=${date.getDate()}&month=${date.getMonth()+1}`

  const [isLoading, setLoading] = useState(true);
  const [breakfastData, setBreakfastData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setBreakfastData(response.data.menu[0].breakfast);
      setLoading(false);
    });
  }, [url]);
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

  return (
    <>
      <div className="App">{breakfastMenuList}</div>
      <StarPoints type="breakfast" date={date} />
    </>
  );
};

export default Breakfast;
