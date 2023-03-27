import React from "react";

const ImageGalleryItem = ({ id, webformatURL, largeformatURL }) => {
  return (
    <>
      <li className="ImageGalleryItem">
        <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
      </li>
    </>
  );
};

export default ImageGalleryItem;
