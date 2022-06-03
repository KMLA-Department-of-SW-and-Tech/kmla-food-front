import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

import StarPoints from "../components/StarPoints";
import Comments from "../components/Comments";

const Breakfast = () => {
  var date = new Date();
  let URL = `https://schoolmenukr.ml/api/high/K100000414?date=${date.getDate()}`;

  //var dinner = [];

  const [isLoading, setLoading] = useState(true);
  const [dinnerData, setDinnerData] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setDinnerData(response.data.menu[0].dinner);
      //lunch = response.data.menu[0].lunch;
      //console.log(response.data.menu[0].dinner);
      //console.log(dinnerData);
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
  const dinnerMenuList = dinnerData.map((menu, index) => (
    <li key={index}>{menu}</li>
  ));

  return (
    <>
      <div className="App">{dinnerMenuList}</div>
      <Comments />
      <StarPoints type = "dinner" />
    </>
  );
};

export default Breakfast;
