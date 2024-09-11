import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import "../App.css";

function Navbar() {
  return (
    <nav className="bg-[#FFFFFF] h-20 px-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            {/* Contenedor del logo  */}
            <div className="flex items-center justify-center">
              <img
                src="/imgHome/reforestart.png" 
                alt="Logo"
                className="h-auto w-auto max-h-[130px] max-w-[190px]" 
              />
            </div>
          </Link>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6 text-[17px] font-manrope font-semibold text-[#EEEEEE]">
          <Link
            to="/plantree"
            className="relative inline-block px-4 py-2 text-[#00712D] hover:bg-[#D6EFD8] hover:text-[#1A5319] text-shadow-navbar after:absolute after:inset-0 after:border-2 after:border-transparent after:rounded-md after:transition-all"
          >
            Plantar Árboles
          </Link>
          
          <Link
            to="/nosotros"
            className="relative inline-block px-4 py-2 text-[#00712D] hover:bg-[#D6EFD8] hover:text-[#1A5319] text-shadow-navbar after:absolute after:inset-0 after:border-2 after:border-transparent after:rounded-md after:transition-all"
          >
            Nosotros
          </Link>
          <Link
            to="/login"
            className="relative inline-block px-4 py-2 text-[#00712D] hover:bg-[#D6EFD8] hover:text-[#1A5319] text-shadow-navbar after:absolute after:inset-0 after:border-2 after:border-transparent after:rounded-md after:transition-all"
          >
            Iniciar Sesión
          </Link>
          <Link to="/registro">
            <Button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700">
              Registrarse
            </Button>
          </Link>
        </div>

     
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 hover:text-green-500 focus:outline-none">
        
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