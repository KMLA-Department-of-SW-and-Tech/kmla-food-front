import React, { useState, useEffect, setState } from "react";
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
import Comments from "../components/Comments";
import DatePicking from "../components/DatePicking";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
  const [value, setValue] = React.useState(new Date());

  const onChangeDate = (newValue) => {
    setValue(newValue);
    this.setState({value: newValue})
  };

  React.useEffect(() => {}, [value]);

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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Basic example"
            value={value}
            onChange={onChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TabContext value={time}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="food time" centered>
              <Tab label="아침" value="1" className="switch-tab-label" />
              <Tab label="점심" value="2" className="switch-tab-label" />
              <Tab label="저녁" value="3" className="switch-tab-label" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Breakfast date = {value} />
          </TabPanel>
          <TabPanel value="2">
            <Lunch date = {value} />
          </TabPanel>
          <TabPanel value="3">
            <Dinner date = {value} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default MainPage;
