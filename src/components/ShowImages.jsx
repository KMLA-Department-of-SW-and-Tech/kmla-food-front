import React, { useEffect } from "react";

const ShowImages = (props) => {
  const imgUrl = props.src;

  useEffect(() => {
    console.log(imgUrl === "");
  }, [imgUrl]);

  if (imgUrl === "") {
    return (
      <div>
        <h1>이미지가 없습니다.</h1>
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={`https://res.cloudinary.com/dyntnppzm/image/upload/v1663947320/${imgUrl}.jpg`}
          style={{ width: "600px" }}
        ></img>
      </div>
    );
  }
};

export default ShowImages;
