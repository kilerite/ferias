// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminView from "./components/AdminView";
import ExecutiveView from "./components/ExecutiveView";
import ProviderView from "./components/ProviderView";
import GiftZoneView from "./components/GiftZoneView";
import Home from "./components/Home";
import { ValidationProvider } from "./context/ValidationContext";

function App() {
  return (
    <ValidationProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminView />} />
            <Route path="/executive/:id" element={<ExecutiveView />} />
            <Route path="/provider/:id" element={<ProviderView />} />
            <Route path="/gift-zone" element={<GiftZoneView />} />
          </Routes>
        </div>
      </Router>
    </ValidationProvider>
  );
}

export default App;
