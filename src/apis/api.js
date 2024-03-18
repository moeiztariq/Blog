import axios from "../utilities/axios";

export const getBlogs= ()=>{
    return axios.get("/GetBLogs/")
}

export const getSingleBlog= (id)=>{
    return axios.get(`/GetBLogs/${id}`)
}
