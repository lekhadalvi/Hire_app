import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FormPage from "./FormPage";
import EditDashboard from "./EditDashboard";
import Thanks from "./Thanks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Dashboard />} />

        <Route path="/form" element={<Form />} />
        <Route path="/edit/:id" element={<Edit />} />
         <Route path="/thanks" element={<Thanks/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
