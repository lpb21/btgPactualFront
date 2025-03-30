import React, { useState } from "react";
import UserSelection from "../src/components/UserSelection.jsx"; // Asegúrate de que la ruta sea correcta

const Layout = ({ menuItems }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleMenuClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '25%', backgroundColor: 'lightgray', padding: '1rem' }}>
      {menuItems.map((item, index) => (
      <button 
      key={index}
      style={{ width: '100%', 
        padding: '0.5rem', 
        marginBottom: '0.5rem', 
        backgroundColor: 'lightblue', 
        color: 'white', 
        borderRadius: '0.25rem' }}
          onClick={() => handleMenuClick(item.component)}
        >
          {item.label}
        </button>
        ))}
      </div>

      {/* Contenido principal */}
      <div style={{ width: '75%', padding: '1rem' }}>
        {activeComponent}
      </div>
    </div>
  );
};

export default Layout;