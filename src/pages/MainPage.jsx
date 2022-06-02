import React, { useState, useEffect } from "react";
import axios from "axios";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Box from "@mui/material/Box";
import Lunch from "./Lunch";
import Breakfast from "./Breakfast";
import Dinner from "./Dinner";
import mockFoodData from "../assets/mockFoodData.json";

const MainPage = () => {
  let date = new Date();
  let type = 1;

  if (date.getHours() >= 12 && date.getHours() < 17) {
    type = 2;
  } else if (date.getHours() >= 17) {
    type = 3;
  } else {
    type = 1;
  }

  const [time, setTime] = useState(type.toString());

  const handleChange = (event, newValue) => {
    setTime(newValue);
    type = newValue.toString();
  };
  /*
  const [foodData, setFoodData] = useState(mockFoodData);

  let URL = `https://schoolmenukr.ml/api/high/K100000414?date=${date.getDate()}`;

  useEffect(() => {
    axios.get(URL).then((response) => {
      //console.log(response.data[0]);
      setFoodData(response);
      //console.log(foodData);
    });
  }, []);
  */

  return (
    <div className="menutab">
      <Box sx={{ width: "60%", typography: "body1" }}>
        <TabContext value={time}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="food time" centered>
              <Tab label="아침" value="1" className="switch-tab-label" />
              <Tab label="점심" value="2" className="switch-tab-label" />
              <Tab label="저녁" value="3" className="switch-tab-label" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Breakfast />
          </TabPanel>
          <TabPanel value="2">
            <Lunch />
          </TabPanel>
          <TabPanel value="3">
            <Dinner />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default MainPage;
