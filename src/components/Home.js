// src/components/Home.js

import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ValidationContext } from "../context/ValidationContext";

const Home = () => {
  const { executives, providers } = useContext(ValidationContext);

  return (
    <div>
      <h2>Bienvenido a la Feria de Proveedores</h2>
      <h3>Selecciona tu rol:</h3>

      <div>
        <h4>Ejecutivos:</h4>
        <ul>
          {executives.map((executive) => (
            <li key={executive.id}>
              <Link to={`/executive/${executive.id}`}>{executive.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Proveedores:</h4>
        <ul>
          {providers.map((provider) => (
            <li key={provider.id}>
              <Link to={`/provider/${provider.id}`}>{provider.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
