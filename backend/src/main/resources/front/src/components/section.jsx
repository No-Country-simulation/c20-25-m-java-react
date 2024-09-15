import React from 'react';
import Button from './button';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Section = ({ imgSrc, imgAlt, title, content, buttonText }) => {
  const navigate = useNavigate();

  const handleButtonClick = ()=>{
    navigate('/login')

  }
  return (
    <div className="pt-20 min-h-screen  mb-20 bg-[#F2F1EB]">
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-4 p-4">
      
      {/* Columna de la imagen */}
      <div className="flex justify-center items-center h-full min-h-[380px]">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-full object-cover rounded-md" 
        />
      </div>
  
      {/* Columna de contenido */}
      <div className="flex flex-col justify-center items-start p-4 sm:p-6 bg-white rounded-md shadow-lg h-full min-h-[380px]">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-4 text-center md:text-left">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 text-center md:text-left">
          {content}
        </p>
        <Button
          className="text-sm sm:text-base md:text-lg py-2 px-4 w-full sm:w-auto"
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  </div>
  

  
  
  );
};

export default Section;
