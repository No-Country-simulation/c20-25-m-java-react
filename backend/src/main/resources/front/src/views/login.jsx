import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/userContex'; 
import Navbar from '../components/navbar/';
import Footer from '../components/Footer';
import { loginUser } from '../services/apiService'; 
import "../App.css";

// Componente de Login
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); 
  const [loading, setLoading] = useState(false);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validar el formato del correo electrónico
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const newErrors = {};

    if (!email) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'El correo electrónico no es válido.';
    }

    if (!password) {
      newErrors.password = 'La contraseña es obligatoria.';
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);
        const response = await loginUser(email, password);

        if (response && response.token) {
          setUser({ name: response.name, email, token: response.token }); 
          navigate('/');
        } else {
          setErrors({ general: 'Error al iniciar sesión. Verifica tus credenciales.' });
        }
      } catch (error) {
        setErrors({ general: 'Error al conectar con el servidor.' });
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F2F1EB]">
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

            {/* Errores generales */}
            {errors.general && <p className="text-red-500 text-sm mb-4">{errors.general}</p>}

            {/* Botón de enviar */}
            <button
              type="submit"
              className={`w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
