import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button'; // Ajusta la ruta según la estructura de tu proyecto

function Navbar() {
    return (
      <nav className="bg-[#000000] bg-opacity-10 h-24 px-4 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        {/* Contenedor del logo con fondo y opacidad ajustada */}
                        <div className="bg-white bg-opacity-80 p-1 rounded h-[50px] w-[120px] flex items-center justify-center">
                            <img
                                src="../src/assets/reforestart.png" // Asegúrate de que esta ruta sea correcta
                                alt="Logo"
                                className="h-[118px] w-auto" // Ajusta la altura a un valor entre 100px y 120px para el logo
                            />
                        </div>
                    </Link>
                </div>
          {/* Menu */}
          <div className="hidden md:flex space-x-6 text-[17px] font-manrope font-semibold text-[#EEEEEE]">
            <Link
              to="/plantar-arboles"
              className="relative inline-block px-4 py-2 text-[#EEEEEE] bg-[#000000] bg-opacity-25 hover:bg-[#D6EFD8] hover:text-[#1A5319] after:absolute after:inset-0 after:border-2 after:border-transparent after:rounded-md after:transition-all"
            >
              Plantar Árboles
            </Link>
            <Link
              to="/bosques"
              className="relative inline-block px-4 py-2 text-[#EEEEEE] bg-[#000000] bg-opacity-25 hover:bg-[#D6EFD8] hover:text-[#1A5319] after:absolute after:inset-0 after:border-2 after:border-transparent after:rounded-md after:transition-all"
            >
              Bosques
            </Link>
            <Link
              to="/nosotros"
              className="relative inline-block px-4 py-2 text-[#EEEEEE] bg-[#000000] bg-opacity-25 hover:bg-[#D6EFD8] hover:text-[#1A5319] after:absolute after:inset-0 after:border-2 after:border-transparent after:rounded-md after:transition-all"
            >
              Nosotros
            </Link>
            
            <Link
              to="/iniciar-sesion"
              className="relative inline-block px-4 py-2 text-[#EEEEEE] bg-[#000000] bg-opacity-25 hover:bg-[#D6EFD8] hover:text-[#1A5319] after:absolute after:inset-0 after:border-2 after:border-transparent after:rounded-md after:transition-all"
            >
              Iniciar Sesión
            </Link>
            <Link to="/registrarse">
              <Button className="text-[#EEEEEE] bg-[#000000] bg-opacity-80 hover:bg-[#D6EFD8] hover:text-[#1A5319]">
                Registrarse
              </Button>
            </Link>
          </div>
  
          {/* Mobile Menu (Hidden in desktop view) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-green-500 focus:outline-none">
              {/* Icon for mobile menu */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
