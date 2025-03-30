import { useState, useEffect } from "react";
const { Config } = require("../config")
import axios from "axios";

const Inicio = () => {
  const [funds, setFunds] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const API_URL = `${Config.api_URL}${Config.port}`;
  console.log(9, API_URL)

  useEffect(() => {
    fetchFunds();
  }, []);

  const fetchFunds = async () => {
    try {
      const response = await axios.get(`${API_URL}/v1/funds`);
      setFunds(response.data);
    } catch (error) {
      console.error("Error fetching funds", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">BTG Pactual - Fondos de Inversión</h1>
      <FundList funds={funds} />
      <Transactions transactions={transactions} />
    </div>
  );
}

function FundList({ funds }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-4">Fondos Disponibles</h2>
      <ul>
        {funds.map((fund) => (
          <li key={fund.id} className="p-2 border-b">{fund.name} - ${fund.amount}</li>
        ))}
      </ul>
    </div>
  );
}

function Transactions({ transactions }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-4">Historial de Transacciones</h2>
      <ul>
      </ul>
    </div>
  );
}


export default Inicio