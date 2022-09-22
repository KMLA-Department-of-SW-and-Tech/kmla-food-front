import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import StarPoints from "../components/StarPoints";
import BasicModal from '../components/BasicModal';

const Lunch = (props) => {
  var date = new Date(props.date);

  const url = `https://schoolmenukr.ml/api/high/K100000414?date=${date.getDate()}&month=${date.getMonth()+1}`

  const [isLoading, setLoading] = useState(true);
  const [lunchData, setLunchData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setLunchData(response.data.menu[0].lunch);
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
  const lunchMenuList = lunchData.map((menu, index) => (
    <li key={index}>{menu}</li>
  ));

  return (
    <>
      <div className="App">{lunchMenuList}</div>
      <BasicModal />
      <StarPoints type="lunch" date={date} />
    </>
  );
};

export default Lunch;
