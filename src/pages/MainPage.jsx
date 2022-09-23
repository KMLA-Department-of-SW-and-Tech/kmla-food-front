import React, { useState, useEffect } from "react";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Box from "@mui/material/Box";
import Lunch from "./Lunch";
import Breakfast from "./Breakfast";
import Dinner from "./Dinner";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const MainPage = () => {
  let date = new Date();
  let type = 1;

  const [render, setRender] = useState(1);
  if (date.getHours() >= 9 && date.getHours() < 14) {
    type = 2;
  } else if (date.getHours() >= 14) {
    type = 3;
  } else {
    type = 1;
  }
  const [value, setValue] = React.useState(new Date());

  const onChangeDate = (newValue) => {
    setValue(newValue);
    //this.setState({ value: newValue });
    setRender(render + 1);
  };

  useEffect(() => {
    
  }, [value]);

  const [time, setTime] = useState(type.toString());

  const handleChange = (event, newValue) => {
    setTime(newValue);
    type = newValue.toString();
  };

  const datePickerStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto"
  };

  return (
    <div className="menutab">
      <Box sx={{ width: "100%", typography: "body1"}}>
        <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ ...datePickerStyle }}>
          <DatePicker
            label="날짜를 선택하세요"
            value={value}
            onChange={onChangeDate}
            renderInput={(params) => <TextField {...params} />}
            className = "date-picker"
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
            <Breakfast date={value} />
          </TabPanel>
          <TabPanel value="2">
            <Lunch date={value} />
          </TabPanel>
          <TabPanel value="3">
            <Dinner date={value} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default MainPage;
