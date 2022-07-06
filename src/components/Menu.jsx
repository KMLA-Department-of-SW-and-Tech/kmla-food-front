import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import axios from "axios";

const Menu = (props) => {
  let URL = props.menulink;
  const [breakfastData, setBreakfastData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setBreakfastData(response.data.menu[0].breakfast);
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

  return (
    <div>{breakfastMenuList}</div>
  )
};

export default Menu;
