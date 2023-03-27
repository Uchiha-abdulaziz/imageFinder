import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
const ImageGallery = ({ images }) => {
  const ImagesElem = images.map((image) => (
    <ImageGalleryItem key={image.id} {...image} />
  ));

  return (
    <>
      <ul className="ImageGallery">{ImagesElem}</ul>
    </>
  );
};

export default ImageGallery;
