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