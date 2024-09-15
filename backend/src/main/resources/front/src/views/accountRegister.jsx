import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/userContex'; 
import Navbar from '../components/navbar/';
import Footer from '../components/Footer';
import { registerUser } from '../services/apiService';
import "../App.css";

const AccountRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Para indicar cuando se está procesando el registro
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

  // Función para validar la contraseña
const validatePassword = (password) => {
  // Expresión regular actualizada:
  // (?=.*[A-Z]): al menos una letra mayúscula.
  // (?=.*\d): al menos un dígito.
  // (?=.*[!@#$%^&*]): al menos un carácter especial.
  // [A-Za-z\d!@#$%^&*]{8,}: al menos 8 caracteres que pueden incluir letras, dígitos y caracteres especiales.
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  // Retornar si la contraseña cumple con el patrón
  return passwordRegex.test(password);
};


  // Función para manejar el submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
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
    } else if (!validatePassword(password)) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.';
    }

    // Si no hay errores, intentamos registrar al usuario
    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true); // Indicamos que estamos procesando
        // Llamamos a la función registerUser que realiza la solicitud a la API
        const response = await registerUser(name, email, password);
        
        // Suponiendo que el registro es exitoso y el servidor devuelve los datos del usuario
        setUser({ name: response.name, email: response.email });

        // Redireccionar a la página principal después del registro exitoso
        navigate('/');
      } catch (error) {
        // Manejo de errores durante el registro
        console.error('Error en el registro:', error);
        newErrors.server = 'Hubo un error al registrar. Inténtalo nuevamente.';
      } finally {
        setLoading(false); // Terminamos el procesamiento
      }
    } else {
      setErrors(newErrors); // Establecemos los errores de validación
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F2F1EB]">
        <div className="max-w-md w-full mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>
          <form onSubmit={handleSubmit}>
            {/* Nombre */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>

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

            {/* Mensaje de error del servidor */}
            {errors.server && <p className="text-red-500 text-sm mb-4">{errors.server}</p>}

            {/* Botón de enviar */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
              disabled={loading} // Deshabilitar el botón si está cargando
            >
              {loading ? 'Registrando...' : 'Registrarse'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountRegister;
