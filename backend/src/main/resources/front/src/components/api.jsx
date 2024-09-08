// src/api.js

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchData = (endpoint, options = {}) => {
  const { method = 'GET', body } = options;

  return fetch(`${apiUrl}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: body ? JSON.stringify(body) : undefined, // Solo incluye el cuerpo en solicitudes POST/PUT
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    throw error; // Permite capturar el error en el componente
  });
};
