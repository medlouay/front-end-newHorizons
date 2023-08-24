import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  return (
    <div className="slider">
      <div className="arrow prev" onClick={prevImage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          width="1000" // Set the desired width
          height="500" // Set the desired height
        />
      </div>
      <div className="arrow next" onClick={nextImage}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
};

export default ImageSlider;
