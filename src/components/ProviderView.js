// src/components/ProviderView.js

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ValidationContext } from "../context/ValidationContext";

const ProviderView = () => {
  const { id } = useParams();
  const providerId = parseInt(id);
  const { executives, validations, validateExecutive, providers } =
    useContext(ValidationContext);

  const provider = providers.find((p) => p.id === providerId);

  if (!provider) {
    return <p>Proveedor no encontrado.</p>;
  }

  return (
    <div>
      <h2>Vista del Proveedor</h2>
      <h3>{provider.name}</h3>
      <ul>
        {executives.map((executive) => (
          <li
            key={executive.id}
            style={{
              listStyleType: "none",
              margin: "10px 0",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {executive.name}
            {validations[executive.id] &&
            validations[executive.id].includes(providerId) ? (
              <span
                style={{
                  color: "green",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                Validado
              </span>
            ) : (
              <button
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
                onClick={() => validateExecutive(executive.id, providerId)}
              >
                Validar
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProviderView;
