import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from '../principal/Layout.jsx'
import UserSelection from './components/UserSelection.jsx';
import TablaFondos from './components/TablaFondos.jsx';
import UserTransactions from './components/UserTransactios.jsx'
import { UserProvider } from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <UserProvider>
    <Layout 
    menuItems={[
      { label: 'Selección de Usuario', component: <UserSelection /> },
      { label: 'Tabla de Fondos', component: <TablaFondos /> },
      { label: 'Transacciones del Usuario', component: <UserTransactions /> },
      // Añade más objetos para otros componentes
    ]}
    />
    </UserProvider>
  </StrictMode>
)
