import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

export default function EditDashboard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mockData, updateItem } = useData();

  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    additionalInfo: "",
    roles: "",
    budget: "",
    talents: "",
    persona: "",
  });

  useEffect(() => {
    const item = mockData.find((d) => d.id === parseInt(id));
    if (item) setForm(item);
  }, [id, mockData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(parseInt(id), form);
    navigate("/"); // Go back to dashboard after update
  };

  return (
    <div className="p-6 bg-yellow-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Edit Submission</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto grid grid-cols-1 gap-4"
      >
        <input
          name="fullname"
          value={form.fullname}
          onChange={handleChange}
          placeholder="Full Name"
          className="p-3 rounded border w-full"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="p-3 rounded border w-full"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-3 rounded border w-full"
        />
        <input
          name="additionalInfo"
          value={form.additionalInfo}
          onChange={handleChange}
          placeholder="Additional Info"
          className="p-3 rounded border w-full"
        />
        <input
          name="roles"
          value={form.roles}
          onChange={handleChange}
          placeholder="Roles"
          className="p-3 rounded border w-full"
        />
        <input
          name="budget"
          value={form.budget}
          onChange={handleChange}
          placeholder="Budget"
          className="p-3 rounded border w-full"
        />
        <input
          name="talents"
          value={form.talents}
          onChange={handleChange}
          placeholder="Talents"
          className="p-3 rounded border w-full"
        />
        <input
          name="persona"
          value={form.persona}
          onChange={handleChange}
          placeholder="Persona"
          className="p-3 rounded border w-full"
        />

        <button
          type="submit"
          className="bg-black text-white py-2 rounded mt-4 hover:bg-gray-800 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}
