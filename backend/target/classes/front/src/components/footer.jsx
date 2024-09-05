import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#16423C] text-[#E9EFEC] py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Primera sección: Logo y redes sociales */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/imgHome/reforestart.png"
            alt="Logo"
            className="h-auto w-auto max-h-[130px] max-w-[190px]"
          />
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            <a href="#" aria-label="X"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
          </div>
        </div>

        {/* Segunda sección: Links y párrafo "Acerca de" */}
        <div className="mt-8 md:mt-0 text-center md:text-left">
          <p><strong>Acerca de</strong></p>
          <div className="mt-4">
            <a href="#" className="block hover:underline">Nosotros</a>
            <a href="#" className="block hover:underline">Preguntas frecuentes</a>
            <a href="#" className="block hover:underline">Planta</a>
          </div>
        </div>

        {/* Última sección: Desarrollado por */}
        <div className="mt-8 md:mt-0 text-center md:text-right">
          <p><strong>Desarrollado por:</strong></p>
          <p>Anthony, Christian, Carlos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
