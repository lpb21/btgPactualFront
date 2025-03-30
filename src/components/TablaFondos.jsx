import { useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useUser } from "../context/UserContext.jsx";
import ModalNotifications from "./ModalNotifications.jsx";
import Config from "../config/index.js";

const TablaFondos = () => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(true); // Para mostrar un loader mientras carga
  const { selectedUser } = useUser();
  const [subscriptions, setSubscriptions] = useState({});
  const [showModalNotifications, setShowModalNotifications] = useState(false);
  const [selectedFundName, setSelectedFundName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${Config.api_URL}/v1/funds`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setPending(false);
    }
  };

  const handleSubscribe = async (fundId) => {
    if (!selectedUser) {
      alert("Por favor, selecciona un usuario antes de suscribirte.");
      return;
    }

    const fund = data.find((fund) => fund._id === fundId);
    const fundName = fund ? fund.nombre : "Desconocido";

    setSelectedFundName(fundName); // Guardar el nombre del fondo

    const subscriptionData = {
      userId: selectedUser.value,
      userName: selectedUser.label,
      userEmail: selectedUser.email,
      fundId: fundId,
      fundName: fundName,
    };
    const confirmacion = window.confirm(
      `¿Estás seguro de suscribirte con los siguientes datos?\n\n` +
        `Usuario: ${selectedUser.label}\n` +
        `Fondo: ${subscriptionData.fundName}`
    );
    if (!confirmacion) {
      alert("Suscripción cancelada.");
      return;
    }
    try {
      const response = await axios.post(
        `${Config.api_URL}/v1/subscribe`,
        subscriptionData
      );
      // Asegurar que el backend devuelve un mensaje
      const message = response.data.message || "Suscripción exitosa";
      //console.log(26, "Datos de suscripción:", response.data);
      //   const confirmacion = window.confirm(
      //     ¿Estás seguro de suscribirte con los siguientes datos?\n\nUsuario: ${selectedUser.label}\nFondo ID: ${fundId}
      //   );
      alert(message);
      setShowModalNotifications(true);
    } catch (error) {
      console.error("Error al suscribirse", error);
      const errorMessage =
        error.response?.data?.message || "Error al suscribirse";
      alert(errorMessage);
    }
  };

  const handleUnsubscribe = async (fundId) => {
    if (!selectedUser) {
      alert(
        "Por favor, selecciona un usuario antes de cancelar la suscripción."
      );
      return;
    }

    const cancelacion = window.confirm(
      `¿Estás seguro de CANCELAR con los siguientes datos\n\n` +
        `Usuario: ${selectedUser.label}\n` +
        `${data.find((fund) => fund._id === fundId)?.nombre || "Desconocido"}?`
    );
    if (!cancelacion) {
      alert("cANCELACION cancelada.");
      return;
    }

    const unSuscribeData = {
      userId: selectedUser.value,
      fundId: fundId,
    };

    try {
      const responseUnsuscribe = await axios.post(
        `${Config.api_URL}/v1/leaveFund`,
        unSuscribeData
      );
      const message =
        responseUnsuscribe.data.message ||
        "Suscripción cancelada exitosamente FRONT";
      alert(message);
    } catch (error) {
      console.error("Error al cancelar suscripción", error);
      const errorMessage =
        error.response?.data?.message || "Error al cancelada FRONT";
      alert(errorMessage);
    }
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row._id,
      sortable: true, // Permite ordenar la columna
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true, // Permite ordenar la columna
    },
    {
      name: "Categoría",
      selector: (row) => row.categoria,
      sortable: true,
    },
    {
      name: "Monto Mínimo",
      selector: (row) => `$${row.montoMinimo.toLocaleString()}`,
      sortable: true,
      right: true, // Alinea el texto a la derecha
    },
    {
      name: "Fecha de Creación",
      selector: (row) => new Date(row.fechaCreacion).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleSubscribe(row._id)}
          >
            Suscribirse
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleUnsubscribe(row._id)}
          >
            Cancelar
          </button>
        </div>
      ),
      ignoreRowClick: true, // Evita que se seleccione la fila al hacer clic en el botón
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <>
      <div className="h-full bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 p-4">
          Listado de Fondos
        </h2>
        {/* {selectedUser && <p>Usuario seleccionado: {selectedUser.value}</p>} */}
        {selectedUser ? (
          <p className="text-gray-700">
            Mostrando fondos para: <strong>{selectedUser.label}</strong>
          </p>
        ) : (
          <p className="text-gray-500">
            Seleccione un usuario para ver los fondos
          </p>
        )}
        <DataTable
          columns={columns}
          data={data}
          progressPending={pending} // Muestra un loader mientras carga
          pagination // Agrega paginación automática
          highlightOnHover // Resalta la fila al pasar el cursor
          striped // Alterna colores de fila
          responsive // Diseño adaptable
          customStyles={customStyles} // Estilos personalizados
        />
      </div>
      {showModalNotifications && (
        <ModalNotifications
          isOpen={showModalNotifications}
          onClose={() => setShowModalNotifications(false)}
          fundName={selectedFundName}
        />
      )}
    </>
  );
};

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      backgroundColor: "#f3f4f6", // Tailwind gray-100
      fontWeight: "bold",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

export default TablaFondos;
