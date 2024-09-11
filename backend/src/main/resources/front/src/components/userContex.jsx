import { createContext, useState } from 'react';

// Crea un contexto para el usuario
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para guardar los datos del usuario

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
