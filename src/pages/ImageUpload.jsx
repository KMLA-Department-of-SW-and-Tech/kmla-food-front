import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    axios.post('')
  }

  return (
    <div className='image-uploader'>
      <input type = "file" onChange = {fileSelectedHandler} />
      <button onClick = {fileUploadHandler}>Upload</button>
    </div>
  );
}

export default ImageUpload;