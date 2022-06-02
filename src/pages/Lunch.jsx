import React, { useState, useEffect } from "react";
import axios from "axios";
import mockFoodData from "../assets/mockFoodData.json";
import mockServingData from "../assets/mockServingData.json";
import Loader from "../components/Loader";
import { render } from "@testing-library/react";

const Lunch = (props) => {
  /*
  
  const [isLoading, setIsLoading] = useState(true);
  
  */
  var date = new Date();
  let URL = `https://schoolmenukr.ml/api/high/K100000414?date=${date.getDate()}`;
  
  var lunch = [];
/*
  useEffect(() => {
    axios.get(URL).then((response) => {
      //console.log(response.data.menu[0].lunch);
      setLunchData(response.data.menu[0].lunch);
      setLunchData(lunchData.lunch);
      setIsLoading(false);
      
    });
  }, []);
  const lunchMenuList = lunch.map((menu, index) => <li key={index}>{menu}</li>);

  //var lunchMenu = props.data.data.menu[0].lunch;
  //console.log(props.data.data.menu[0].lunch);
  if (isLoading) return <Loader type="spin" color="RGB 값" message="Loading..." />;
  return <div>{lunchMenuList}</div>
  */
  const [isLoading, setLoading] = useState(true);
  const [lunchData, setLunchData] = useState(mockServingData);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setLunchData(response.data.menu[0].lunch);
      lunch = lunchData.lunch;
      console.log(lunch);
      setLoading(false);
    });
  }, []);
  

  if (isLoading) {
    return <div className="App"><Loader type="spin" color="RGB 값" message="Loading..." /></div>;
  }
  const lunchMenuList = lunch.map((menu, index) => (
    <li key={index}>{menu}</li>
    //console.log(menu)
  ));

  return (
    <div className="App">
      {lunchMenuList}
    </div>
  );
};

export default Lunch;
