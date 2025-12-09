import React, { useContext } from "react";
import { DataContext } from "../DataContext";

export default function Dashboard() {
  const { form } = useContext(DataContext);

  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl mb-6">Dashboard</h1>

      <div className="flex flex-wrap gap-6">
        {form.length === 0 && <p>No submissions found.</p>}

        {form.map((item) => (
          <div key={item.id} className="bg-[#FFF1B8] p-5 rounded-xl w-[300px] shadow">

            <p className="text-xs bg-gray-200 px-2 py-1 rounded font-semibold mb-1">
              Full Name
            </p>
            <p className="mb-3">{item.fullname}</p>

            <p className="text-xs bg-gray-200 px-2 py-1 rounded font-semibold mb-1">
              Phone
            </p>
            <p className="mb-3">{item.phone}</p>

            <p className="text-xs bg-gray-200 px-2 py-1 rounded font-semibold mb-1">
              Email
            </p>
            <p className="mb-3">{item.email}</p>

            <p className="text-xs bg-gray-200 px-2 py-1 rounded font-semibold mb-1">
              Additional Info
            </p>
            <p className="mb-3">{item.additionalInfo}</p>

            <p className="text-xs bg-gray-200 px-2 py-1 rounded font-semibold mb-1">
              Roles
            </p>
            <p className="mb-3">{item.roles}</p>

            <p className="text-xs bg-gray-200 px-2 py-1 rounded font-semibold mb-1">
              Budget
            </p>
            <p className="mb-3">{item.budget}</p>

            <p className="text-xs bg-gray-200 px-2 py-1 rounded font-semibold mb-1">
              Talents
            </p>
            <p className="mb-3">{item.talents}</p>

            <p className="text-xs bg-gray-200 px-2 py-1 rounded font-semibold mb-1">
              Persona
            </p>
            <p>{item.persona}</p>

          </div>
        ))}
      </div>
    </div>
  );
}
