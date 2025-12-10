import { createContext, useContext, useState, useEffect } from "react";
import { getdata } from "./Api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [form, setForm] = useState([]);

  useEffect(() => {
    getdata().then((res) => setForm(res));
  }, []);

  return (
    <DataContext.Provider value={{ form, setForm }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
