import {  createContext, useEffect, useState } from "react";
import { getdata } from "./Api";


export const datacontext = createContext();
 
export const Data= ({children}) =>{
    const[form , setForm] =useState([]);

    const loadData =async () =>{
        const res = await getdata();
        setForm(res || []);

    };

    useEffect(() =>{
        loadData();
    }, []);
}

return(
    <Data.Provider value={}>
        {chi}
    </Data.Provider>
)
import api from "./URL"


export const getdata = async() =>{
    try {
    const res= await api.get("/");
    return res.data;
    } catch (error) {
        alert("failed to get data")
    }
};

export const Formdata =async (data) =>{
    try {
        const res = await api.post("/",data);
        return res.data;
    } catch (error) {
        alert("failed to submit data")
    }
};

export const editdata = async(id,data) =>{
    try {
        const res =await api.patch(`/${id}`,data);
        return res.data;
    } catch (error) {
        alert("failed to update data");
    }
};

export const deletedata = async (id) =>{
    try {
        const res = await api.delete(`/${id}`);
        return res.data;
    } catch (error) {
        alert("failed to delete data");
    }
};
