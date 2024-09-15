import '../App.css'
import React, { useState } from 'react';

const Carousel = ({ images, onImageChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar a la siguiente imagen
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    onImageChange(nextIndex);
  };

  // Función para retroceder a la imagen anterior
  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    onImageChange(prevIndex);
  };

  // Función para manejar los clics en la imagen y determinar si fue en el lado izquierdo o derecho
  const handleImageClick = (event) => {
    const clickX = event.nativeEvent.offsetX;
    const imageWidth = event.target.clientWidth;

    // Si el clic fue en la mitad izquierda, retrocede; si fue en la mitad derecha, avanza
    if (clickX < imageWidth / 2) {
      handlePrevious();
    } else {
      handleNext();
    }
  };

  return (
    <div className="relative w-full h-[380px]">
      {/* Imagen del carrusel que se puede hacer clic */}
      <img
        src={images[currentIndex]}
        alt="Tree"
        className="w-full h-full object-cover rounded-lg"
        onClick={handleImageClick} // Evento de clic en la imagen
      />

      {/* Botones de navegación visibles solo en pantallas grandes */}
      <button
        className="carousel-button absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
        onClick={handlePrevious}
        aria-label="Previous"
      >
        &lt;
      </button>
      <button
        className="carousel-button absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
        onClick={handleNext}
        aria-label="Next"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
