import React from "react";
import Navbar from "../components/navbar";
import "../App.css";
import Button from "../components/button";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Sección principal con imagen y contenido */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Contenedor en dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-4">
          {/* Columna de la imagen */}
          <div className="flex justify-center items-center">
            <img
              src="/imgHome/imgPrincipal.jpg"
              alt="Imagen Principal"
              className="w-full h-[380px] object-cover rounded-md"
            />
          </div>

          {/* Columna de contenido */}
          <div className="flex flex-col justify-center items-start p-6 bg-white rounded-md shadow-lg h-[380px]">
            <h1 className="text-3xl font-bold text-black mb-4">
              Haz la diferencia: únete a nuestra misión para reforestar y proteger los bosques nativos de Argentina.
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Nuestro esfuerzo puede mejorar el medio ambiente y crear un futuro más verde para todos. Cada árbol cuenta y tú también puedes ser parte del cambio.
            </p>
            <Button>Planta tu Arbol</Button>
          </div>
        </div>
      </div>

      {/* Nueva sección con imagen y contenido */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Contenedor en dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-4">
          {/* Columna de la imagen */}
          <div className="flex justify-center items-center">
            <img
              src="/imgHome/reforestando.jpg"
              alt="Descripción de la imagen"
              className="w-full h-[380px] object-cover rounded-md"
            />
          </div>

          {/* Columna de contenido */}
          <div className="flex flex-col justify-center items-start p-6 bg-white rounded-md shadow-lg h-[380px]">
            <h1 className="text-4xl font-bold text-black mb-4">
              Nuestros Objetivos: Restaurar y Proteger
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              En Reforestar, nuestro objetivo es restaurar los ecosistemas forestales de Argentina y proteger la biodiversidad. Trabajamos para reforestar áreas críticas, apoyar la conservación de especies en peligro y promover prácticas sostenibles. Con cada proyecto, buscamos restaurar el equilibrio natural y fomentar un futuro más verde para las generaciones venideras.
            </p>
            <Button>Unete y Empieza a Plantar</Button>
          </div>
        </div>
      </div>

      {/* Nueva sección sobre Emisiones de CO2 */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Contenedor en dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-4">
          {/* Columna de la imagen */}
          <div className="flex justify-center items-center">
            <img
              src="/imgHome/bosqueCo2.avif" // Asegúrate de que la ruta de la imagen sea correcta
              alt="Descripción de la imagen de CO2"
              className="w-full h-[380px] object-cover rounded-md"
            />
          </div>

          {/* Columna de contenido */}
          <div className="flex flex-col justify-center items-start p-6 bg-white rounded-md shadow-lg h-[380px]">
            <h1 className="text-4xl font-bold text-black mb-4">
              Tu Huella de Carbono
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              La huella de carbono mide el impacto de tus actividades diarias en el medio ambiente, en términos de emisiones de gases de efecto invernadero. Reducir tu huella es crucial para combatir el cambio climático. Cada árbol que plantas puede absorber entre 20 y 50 kg de CO2 por año, contribuyendo significativamente a mejorar la calidad del aire. Descubre cómo puedes calcular tu huella de carbono y aprender estrategias para reducir tus emisiones, apoyando así un futuro más sostenible.
            </p>
            <Button>Compensa tu CO2 Planta ahora</Button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
