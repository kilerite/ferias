// src/components/ExecutiveView.js

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ValidationContext } from "../context/ValidationContext";

const ExecutiveView = () => {
  const { id } = useParams();
  const executiveId = parseInt(id);
  const { providers, validations } = useContext(ValidationContext);

  const executiveValidations = validations[executiveId] || [];

  // Verificar si todos los proveedores han validado al ejecutivo
  const allValidated = providers.every((provider) =>
    executiveValidations.includes(provider.id)
  );

  return (
    <div>
      <h2>Vista del Ejecutivo</h2>
      <h3>Bienvenido, Ejecutivo {executiveId}</h3>
      <ul>
        {providers.map((provider) => (
          <li
            key={provider.id}
            style={{
              color: executiveValidations.includes(provider.id)
                ? "green"
                : "red",
              listStyleType: "none",
              margin: "10px 0",
              fontSize: "18px",
            }}
          >
            {provider.name}
          </li>
        ))}
      </ul>
      {allValidated ? (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ¡Has completado todas las validaciones! Puedes retirar tu regalo.
        </p>
      ) : (
        <p style={{ color: "orange", fontWeight: "bold" }}>
          Aún tienes validaciones pendientes.
        </p>
      )}
    </div>
  );
};

export default ExecutiveView;
