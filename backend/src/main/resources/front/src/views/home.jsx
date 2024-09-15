import React from "react";
import Navbar  from "../components/navbar";
import Footer from "../components/Footer";
import Section from "../components/section";
import CommetnBox from "../components/commetnBox";


const Home = () => {
  return (
    <>
      <Navbar />

<div className="pt-20 min-h-screen bg-[#F2F1EB]">
  <Section
    imgSrc="/imgHome/imgPrincipal.jpg"
    imgAlt="Imagen Principal"
    title="Haz la diferencia: únete a nuestra misión para reforestar y proteger los bosques nativos de Argentina."
    content="Nuestro esfuerzo puede mejorar el medio ambiente y crear un futuro más verde para todos. Cada árbol cuenta y tú también puedes ser parte del cambio."
    buttonText="Planta tu Árbol"
  />
  <Section
    imgSrc="/imgHome/reforestando.jpg"
    imgAlt="Descripción de la imagen"
    title="Nuestros Objetivos: Restaurar y Proteger"
    content="En Reforestar, nuestro objetivo es restaurar los ecosistemas forestales de Argentina y proteger la biodiversidad. Trabajamos para reforestar áreas críticas, apoyar la conservación de especies en peligro y promover prácticas sostenibles. Con cada proyecto, buscamos restaurar el equilibrio natural y fomentar un futuro más verde para las generaciones venideras."
    buttonText="Únete y Empieza a Plantar"
  />
  <Section
    imgSrc="/imgHome/bosqueCo2.avif"
    imgAlt="Descripción de la imagen de CO2"
    title="Tu Huella de Carbono"
    content="La huella de carbono mide el impacto de tus actividades diarias en el medio ambiente, en términos de emisiones de gases de efecto invernadero. Reducir tu huella es crucial para combatir el cambio climático. Cada árbol que plantas puede absorber entre 20 y 50 kg de CO2 por año, contribuyendo significativamente a mejorar la calidad del aire. Descubre cómo puedes calcular tu huella de carbono y aprender estrategias para reducir tus emisiones, apoyando así un futuro más sostenible."
    buttonText="Compensa tu CO2 Planta ahora"
  />
</div>

<Footer />


    </>
  );
};

export default Home;
