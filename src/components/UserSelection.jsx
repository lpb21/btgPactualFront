import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { useUser } from "../context/UserContext.jsx"; 
import Config from "../config/index.js";

const UserSelection = () =>{
        const [users, setUsers] = useState([]);
        const { selectedUser, setSelectedUser } = useUser();
      
        useEffect(() => {
          fetchUsers();
        }, []);
      
        const fetchUsers = async () => {
          try {
            const response = await axios.get(`${Config.api_URL}/v1/users`);
            setUsers(response.data);
          } catch (error) {
            console.error("Error fetching users", error);
          }
        };

        const userOptions = users.map((user) => ({
            value: user._id,
            label: user.nombre,
            email: user.email,
            balance: user.balance,
            fechaCreacion: user.fechaCreacion
          }));

          //Este useEffect se ejecutará cada vez que selectedUser cambie
          useEffect(() => {
            if (selectedUser) {
              console.log("Usuario seleccionado ha cambiado:", selectedUser);
            }
          }, [selectedUser]); // Observa selectedUser
      
          return (
            <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Seleccionar Usuario</h2>
              <Select
                options={userOptions}
                className="w-full mb-4"
                getOptionLabel={(e) => e.label}
                onChange={(selectedOption) => {
                    setSelectedUser(selectedOption || null); // Guardar en el contexto
                  }}
                placeholder="Seleccione un usuario"
                value={selectedUser} // Mantener la selección al cambiar de página
              />
              {selectedUser && (
                <div className="space-y-2">
                    <div>
                    <label className="block text-sm font-medium text-gray-600">ID</label>
                    <input
                      type="text"
                      value={selectedUser.value}
                      disabled
                      //className="min-w-[300px] p-2 border rounded bg-gray-100 text-gray-700"
                      style={{ minWidth: '180px', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', backgroundColor: '#f3f4f6', color: '#374151' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Correo Electrónico</label>
                    <input
                      type="text"
                      value={selectedUser.email}
                      disabled
                      className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Saldo</label>
                    <input
                      type="text"
                      value={`$${selectedUser.balance}`}
                      disabled
                      className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Fecha de Creación</label>
                    <input
                      type="text"
                      value={new Date(selectedUser.fechaCreacion).toLocaleDateString()}
                      disabled
                      className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                    />
                  </div>
                </div>
              )}
            </div>
          );
      }

export default UserSelection