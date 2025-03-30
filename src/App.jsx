import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inicio from './components/Inicio.jsx'
import UserSelection from './components/UserSelection.jsx'
//import SideMenu from "../principal/SideMenu.jsx"
import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0)
  const [view, setView] = useState("cart");

  return (
    <div className="App">
      <div className="side-menu-container">
        {/* <SideMenu setView={setView} />
        <div className="main-content">
        {view === "clientes" && (
          <UserSelection />
        )}

        </div> */}
      </div>
      </div>
  )
}

export default App
