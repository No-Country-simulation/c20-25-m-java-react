import React from "react";
import Navbar from "../components/navbar";
import backgroundImage from "../assets/imgPrincipal.jpg";
import "../App.css";
import Button from "../components/button";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Sección principal con imagen y contenido */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Contenedor en dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto p-4">
          {/* Columna de la imagen */}
          <div className="flex justify-center items-center">
            <img
              src={backgroundImage}
              alt="Imagen Principal"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>

          {/* Columna de contenido */}
          <div className="flex flex-col justify-center items-start p-6 bg-white rounded-md shadow-lg">
            <h1 className="text-3xl font-bold text-black mb-4">
              Haz la diferencia: únete a nuestra misión para reforestar y
              proteger los bosques nativos de Argentina.
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Nuestro esfuerzo puede mejorar el medio
              ambiente y crear un futuro más verde para todos. Cada árbol cuenta
              y tú también puedes ser parte del cambio.
            
            </p>
            <Button>
         Planta tu Arbol
         </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
