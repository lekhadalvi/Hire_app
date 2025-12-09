import { createContext, useEffect, useState } from "react";
import { getdata } from "./Api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [form, setForm] = useState([]);

  const loadData = async () => {
    const res = await getdata();
    setForm(res || []);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ form, setForm, loadData }}>
      {children}
    </DataContext.Provider>
  );
};
