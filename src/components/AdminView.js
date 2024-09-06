// src/components/AdminView.js

import React, { useState } from "react";

const AdminView = () => {
  const [providers, setProviders] = useState([]);
  const [executives, setExecutives] = useState([]);

  const addProvider = (name) => {
    setProviders([...providers, { name, validated: false }]);
  };

  const addExecutive = (name) => {
    setExecutives([...executives, { name, completed: false }]);
  };

  return (
    <div>
      <h2>Admin View</h2>
      <div>
        <h3>Add Provider</h3>
        <button onClick={() => addProvider(prompt("Provider Name:"))}>
          Add Provider
        </button>
      </div>
      <div>
        <h3>Add Executive</h3>
        <button onClick={() => addExecutive(prompt("Executive Name:"))}>
          Add Executive
        </button>
      </div>
      <div>
        <h3>Current Providers</h3>
        <ul>
          {providers.map((provider, index) => (
            <li key={index}>{provider.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Current Executives</h3>
        <ul>
          {executives.map((executive, index) => (
            <li key={index}>{executive.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminView;
