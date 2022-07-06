import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import StarPoints from "../components/StarPoints";

const Dinner = (props) => {
  var date = new Date(props.date);

  const url = `https://schoolmenukr.ml/api/high/K100000414?date=${date.getDate()}&month=${date.getMonth()+1}`

  const [isLoading, setLoading] = useState(true);
  const [dinnerData, setDinnerData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setDinnerData(response.data.menu[0].dinner);
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
  const dinnerMenuList = dinnerData.map((menu, index) => (
    <li key={index}>{menu}</li>
  ));

  return (
    <>
      <div className="App">{dinnerMenuList}</div>
      <StarPoints type="dinner" date={date} />
    </>
  );
};

export default Dinner;
