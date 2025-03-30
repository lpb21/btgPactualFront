import { createContext, useContext, useState } from "react";

// 1️⃣ Crear el contexto
const UserContext = createContext();
//export const UserContext = createContext();

// 2️⃣ Proveedor del contexto (envuelve la aplicación)
export const UserProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3️⃣ Hook personalizado para usar el contexto fácilmente
export const useUser = () => useContext(UserContext);
