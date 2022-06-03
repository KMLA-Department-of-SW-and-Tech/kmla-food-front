import React, {useState} from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';


const DatePicking = () => {
    const [value, setValue] = useState(new Date());

    return (
        <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    );
}

export default DatePicking;