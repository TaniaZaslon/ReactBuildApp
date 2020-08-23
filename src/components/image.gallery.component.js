import React from "react";
import Lightbox from "react-lightbox-component";

function ImageGallery({ images }) {
  return (
    <Lightbox
      images={
        ([] = images.map((item) => {
          let obj = {
            src: item.src.large,
            title: "",
            description: " ",
          };
          return obj;
        }))
      }
      renderImageFunc={(idx, image, toggleLightbox) => {
        return (
          <div className="column-gallery" key={idx}>
            <img
              key={idx}
              src={image.src}
              onClick={toggleLightbox.bind(null, idx)}
              alt=""
              className="lightbox-img-thumbnail"
            />
          </div>
        );
      }}
    />
  );
}
export default ImageGallery;
