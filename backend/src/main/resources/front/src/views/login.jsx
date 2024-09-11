import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/userContex'; // Asegúrate de importar el contexto
import Navbar from '../components/navbar/';
import Footer from '../components/Footer';
import "../App.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Usar el contexto para actualizar el usuario

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para validar el email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para manejar el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const newErrors = {};

    // Validación del email
    if (!email) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'El correo electrónico no es válido.';
    }

    // Validación de la contraseña
    if (!password) {
      newErrors.password = 'La contraseña es obligatoria.';
    }

    // Si no hay errores, navega a la página principal
    if (Object.keys(newErrors).length === 0) {
      // Suponiendo que el inicio de sesión es exitoso
      console.log('Inicio de sesión exitoso:', formData);

      // Actualizar el contexto del usuario
      setUser({ email }); // Puedes añadir más datos si es necesario

      // Redireccionar a la página principal
      navigate('/');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
    <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#C4DAD2]">
        <div className="max-w-md w-full mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Contraseña */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Contraseña</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Botón de enviar */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
     <Footer/>
    </>
  );
};

export default Login;
