import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useUser } from '../context/UserContext.jsx';
import Config from "../config/index.js";

const UserTransactions = () => {
  const { selectedUser } = useUser();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (selectedUser) {
        setLoading(true);
        try {
          const url = `${Config.api_URL}/v1/transactions/${selectedUser.value}`;
          const response = await axios.get(url);
          setTransactions(response.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchTransactions();
  }, [selectedUser]);

  const columns = [
    { name: "ID", selector: row => row._id, sortable: true },
    { name: "Fondo", selector: row => row.fund?.nombre || 'Desconocido', sortable: true },
    { name: "Monto", selector: row => `$${row.monto.toLocaleString()}`, sortable: true, right: true },
    { name: "Tipo", selector: row => row.tipo, sortable: true },
    { name: "Fecha", selector: row => new Date(row.date).toLocaleString(), sortable: true },
  ];

  return (
    <div className="h-full bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Historial de Transacciones</h2>
      {selectedUser ? (
        <p className="text-gray-700">Mostrando transacciones para: <strong>{selectedUser.label}</strong></p>
      ) : (
        <p className="text-gray-500">Seleccione un usuario para ver las transacciones</p>
      )}
      {loading ? (
        <p className="text-gray-500">Cargando transacciones...</p>
      ) : error ? (
        <p className="text-red-500">Error al cargar transacciones: {error}</p>
      ) : (
        <DataTable
          columns={columns}
          data={transactions}
          pagination
          highlightOnHover
          striped
          responsive
        />
      )}
    </div>
  );
};

export default UserTransactions;