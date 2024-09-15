import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#16423C] text-[#E9EFEC] py-8 mt-20"> {/* Agrega mt-20 para margen superior */}
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    {/* Primera sección: Logo y redes sociales */}
    <div className="flex flex-col items-center md:items-start">
      <div className="bg-white rounded-lg shadow-lg flex items-center justify-center">
        <img
          src="/imgHome/reforestart.png"
          alt="Logo"
          className="h-[130px] w-[130px]" 
        />
      </div>
      <div className="mt-4 flex w-full justify-between max-w-[200px]">
        <a href="https://www.instagram.com/accounts/login/" aria-label="Instagram" className="text-[#E9EFEC] hover:text-white">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://x.com/i/flow/login" aria-label="X" className="text-[#E9EFEC] hover:text-white">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="https://www.facebook.com/login/" aria-label="Facebook" className="text-[#E9EFEC] hover:text-white">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
      </div>
    </div>

    {/* Segunda sección: "Acerca de" */}
    <div className="mt-8 md:mt-0 text-center md:text-left">
      <p><strong>Acerca de</strong></p>
      <div className="mt-4">
        <a href="#" className="block hover:underline">Nosotros</a>
        <a href="#" className="block hover:underline">Preguntas frecuentes</a>
        <a href="#" className="block hover:underline">Planta</a>
      </div>
    </div>

    {/* Última sección: Desarrollado por */}
    <div className="mt-8 md:mt-0 text-center md:text-left">
      <p><strong>Desarrollado por</strong></p>
      <div className="mt-2 space-y-2 ">
        <a href="https://www.linkedin.com/in/anthony-campos-quintero-fdv/" target="_blank" rel="noopener noreferrer" className="block hover:underline">Anthony Campos</a>
        <a href="https://www.linkedin.com/in/cristhiandaniloguerrero/" target="_blank" rel="noopener noreferrer" className="block hover:underline">Cristhian Danilo</a>
        <a href="https://www.linkedin.com/in/carlos-hernando-barbosa-triana-32b28a281/" target="_blank" rel="noopener noreferrer" className="block hover:underline">Carlos Hernando</a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
