import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const ImageUpload = () => {
  const [imageSelected, setImageSelected] = useState("");
  const [value, setValue] = useState(new Date());
  const [type, setType] = useState("breakfast");
  const [id, setId] = useState("");

  const onChangeDate = (newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {}, [value]);

  const uploadImage = async (files) => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "tftld6bd");
    axios
      .post("https://api.cloudinary.com/v1_1/dyntnppzm/image/upload", formData)
      .then((response) => {
        setId(response.data.public_id);
      });
    var formattedDate = "";
    formattedDate += value.getFullYear();
    formattedDate += "-";
    formattedDate += value.getMonth() + 1;
    formattedDate += "-";
    formattedDate += value.getDate();
    console.log(formattedDate);
    console.log(type);
    console.log(id);
    axios
      .put(`https://kmla-food.herokuapp.com/api/meals/${formattedDate}/${type}/${id}`)
      .then((response) => {
        console.log(response);
      });
    alert(`${formattedDate} ${type} 이미지가 업로드 되었습니다.`);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={onChangeDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <FormControl style={{ display: "block", marginTop: "20px" }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={type}
          onChange={handleChange}
        >
          <FormControlLabel
            value="breakfast"
            control={<Radio />}
            label="아침"
          />
          <FormControlLabel value="lunch" control={<Radio />} label="점심" />
          <FormControlLabel value="dinner" control={<Radio />} label="저녁" />
        </RadioGroup>
      </FormControl>
      <input
        type="file"
        onChange={(e) => {
          setImageSelected(e.target.files[0]);
        }}
        style={{ marginTop: "40px", display: "block" }}
      />
      <button
        onClick={uploadImage}
        style={{ marginTop: "20px" }}
        className="upload-button"
      >
        이미지 업로드
      </button>
    </>
  );
};

export default ImageUpload;
