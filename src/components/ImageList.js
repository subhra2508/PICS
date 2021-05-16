import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img key={image.id} src={image.urls.regular} alt={image.description} />
    );
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

//we have to assign the key to the root element of what we are returning so here the root element is the img
