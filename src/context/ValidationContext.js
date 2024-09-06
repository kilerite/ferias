// src/context/ValidationContext.js

import React, { createContext, useState } from "react";

// Crear el contexto
export const ValidationContext = createContext();

// Proveedor del contexto
export const ValidationProvider = ({ children }) => {
  // Lista inicial de proveedores
  const [providers] = useState([
    { id: 1, name: "Proveedor A" },
    { id: 2, name: "Proveedor B" },
    { id: 3, name: "Proveedor C" },
  ]);

  // Lista inicial de ejecutivos
  const [executives] = useState([
    { id: 1, name: "Ejecutivo 1" },
    { id: 2, name: "Ejecutivo 2" },
    { id: 3, name: "Ejecutivo 3" },
  ]);

  // Estado de validación: objeto con claves de ejecutivos que contienen un array de IDs de proveedores validados
  const [validations, setValidations] = useState({});

  // Función para validar un ejecutivo por un proveedor
  const validateExecutive = (executiveId, providerId) => {
    setValidations((prevValidations) => {
      const executiveValidations = prevValidations[executiveId] || [];
      if (!executiveValidations.includes(providerId)) {
        return {
          ...prevValidations,
          [executiveId]: [...executiveValidations, providerId],
        };
      }
      return prevValidations;
    });
  };

  return (
    <ValidationContext.Provider
      value={{
        providers,
        executives,
        validations,
        validateExecutive,
      }}
    >
      {children}
    </ValidationContext.Provider>
  );
};
