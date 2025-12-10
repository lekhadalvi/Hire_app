import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import FormPage from "./Form";
import EditDashboard from "./Edit";
import Thanks from "./Thanks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/edit/:id" element={<EditDashboard />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
