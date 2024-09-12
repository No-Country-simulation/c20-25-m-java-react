

// URL base del servidor o API. Cambia esto según la URL de tu backend
const BASE_URL = 'https://tu-backend.com/api';

// Función para registrar un nuevo usuario
// Parámetros: name, email y password que provienen del formulario de registro
export const registerUser = async (name, email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST', // Método HTTP POST para enviar datos al servidor
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido a enviar
      },
      body: JSON.stringify({ name, email, password }), // Convertimos los datos a formato JSON
    });

    // Verificamos si la respuesta del servidor fue exitosa
    if (!response.ok) {
      throw new Error('Error en el registro');
    }

    // Convertimos la respuesta a formato JSON
    const data = await response.json();

    // Aquí puedes almacenar el token o información del usuario en localStorage
    // Por ejemplo: localStorage.setItem('userToken', data.token);

    return data; // Devolvemos los datos del usuario registrado
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    throw error; // Propagamos el error para que se maneje en el componente
  }
};

// Función para iniciar sesión
// Parámetros: email y password que provienen del formulario de login
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST', // Método HTTP POST para enviar los datos
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido a enviar
      },
      body: JSON.stringify({ email, password }), // Convertimos los datos a formato JSON
    });

    // Verificamos si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error('Error al iniciar sesión');
    }

    // Convertimos la respuesta a formato JSON
    const data = await response.json();

    // Aquí puedes almacenar el token o información del usuario en localStorage
    // Por ejemplo: localStorage.setItem('userToken', data.token);

    return data; // Devolvemos los datos del usuario logueado
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error; // Propagamos el error para que se maneje en el componente
  }
};
