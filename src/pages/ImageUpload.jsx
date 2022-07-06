/**************************
This file is needed to be worked on in the future

import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileUpload = () => {
    const formData = new FormData();

    formData.append("image", selectedFile, selectedFile.name);

  }

  return (
    <>
      <h1>Image Upload</h1>
      <input type="file" name="file" />
      <button>Upload</button>
    </>
  );
};

export default ImageUpload;

*******/