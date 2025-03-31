import React, { useState } from "react";
import axios from "axios";
import "../../modalNotifications.css";
import { useUser } from "../context/UserContext.jsx";
import Config from "../config/index.js";

const ModalNotifications = ({ isOpen, onClose, fundName  }) => {
  const [notificationType, setNotificationType] = useState("sms");
  const [recipient, setRecipient] = useState("");

   // Mensaje predefinido basado en el fondo
   const message = `Ingresado exitosamente al fondo ${fundName}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const countryCode = `${Config.code_country}`;

    // Si es SMS, asegurarse de incluir el código de país
  const formattedRecipient =
  notificationType === "sms"
    ? recipient.startsWith("+") // Evitar duplicación si el usuario lo escribe
      ? recipient
      : countryCode + recipient
    : recipient;

  const notificationData = {
    type: notificationType,
    message,
    ...(notificationType === "sms" ? { userPhone: formattedRecipient } : { userEmail: formattedRecipient }),
  };
    try {
      const response = await axios.post(`${Config.api_URL}/v1/sendNotification`, notificationData);
      alert(response.data.message || "Notificación enviada exitosamente");
      onClose();
    } catch (error) {
      console.error("Error al enviar la notificación", error);
      alert("Error al enviar la notificación");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Enviar Notificación</h2>
        <p>Fondo seleccionado: <strong>{fundName}</strong></p>
        <form onSubmit={handleSubmit}>
          <div>
          <label>Tipo de Notificación</label>
          <select value={notificationType} onChange={(e) => setNotificationType(e.target.value)}>
          
          <option value="sms">Mensaje de Texto (SMS)</option>
          <option value="email">Correo Electrónico</option>
          </select>
          </div>
          <div>
          <label>{notificationType === "sms" ? "Número de Móvil" : "Correo Electrónico"}</label>
          <input
              type={notificationType === "sms" ? "tel" : "email"}
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default ModalNotifications;
