import * as axios from "axios";




export const getUsers=(currentPage,pageSize)=>{

    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,{
        withCredentials:true})
        .then(response=>{
            return response.data;
        });
}



export const loginAuth=()=>{
    return axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true
    })
}


export const followFunc=(id)=>{
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials:true,
        headers:{
            "API-KEY":"86b6d55f-9b69-4c48-827b-0eb35e80dd79"
        }
    })
}

export const unFollow=(id)=>{
    return     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{},{
        withCredentials:true,
        headers:{
            "API-KEY":"86b6d55f-9b69-4c48-827b-0eb35e80dd79"
        }
    })
}

