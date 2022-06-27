import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Comments from "../components/Comments";
import StarPoints from "../components/StarPoints";
import Menu from "../components/Menu";

const Lunch = (props) => {
  //const forceUpdate = useForceUpdate();

  var date = new Date(props.date);
  //console.log(props.date);
  const [url, setUrl] = useState(
    `https://schoolmenukr.ml/api/high/K100000414?date=${date.getDate()}`
  );
  //this.setState({URL: url})
  //var breakfast = [];

  const [isLoading, setLoading] = useState(true);
  const [lunchData, setLunchData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setLunchData(response.data.menu[0].lunch);
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
  const lunchMenuList = lunchData.map((menu, index) => (
    <li key={index}>{menu}</li>
  ));
  //React.useEffect(() => {}, [url]);

  return (
    <>
      {/*<Menu menulink={url} />*/}
      
      <div className="App">{lunchMenuList}</div>
      <StarPoints type="lunch" date={date} />
    </>
  );
};

export default Lunch;
