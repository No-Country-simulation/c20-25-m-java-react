import React, { useState } from 'react';

const Carousel = ({ images, onImageChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    onImageChange(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    onImageChange(prevIndex);
  };

  return (
    <div className="relative w-full h-full">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full"
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <img src={images[currentIndex]} alt="Tree" className="w-full h-[380px] object-cover rounded-lg" />
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
