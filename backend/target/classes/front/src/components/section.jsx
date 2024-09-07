import React from 'react';
import Button from './button';

const Section = ({ imgSrc, imgAlt, title, content, buttonText }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    {/* Contenedor en dos columnas */}
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-4">
      {/* Columna de la imagen */}
      <div className="flex justify-center items-center">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-[380px] object-cover rounded-md"
        />
      </div>

      {/* Columna de contenido */}
      <div className="flex flex-col justify-center items-start p-6 bg-white rounded-md shadow-lg h-[380px]">
        <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
          {title}
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          {content}
        </p>
        <Button className="text-base md:text-lg py-2 px-4">
          {buttonText}
        </Button>
      </div>
    </div>
  </div>
  );
};

export default Section;
