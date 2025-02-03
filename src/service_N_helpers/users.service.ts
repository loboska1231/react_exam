import {IUserResponse} from "../models/users_model/IUserResponse.ts";
import {IUser} from "../models/users_model/IUser.ts";
import {axiosInstance} from "./api.service.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {IUserWithTokens} from "../models/users_model/IUserWithTokens.ts";


const loadAuthUsers = async (pg:number) =>{
    const {data:{users}} = await axiosInstance.get<IUserResponse>(`/users?skip=${(pg>1)?(pg-1)*10:0}&limit=10`);
    return users;
}
const loadAuthUser = async (userId:number) =>{
    const {data} = await axiosInstance.get<IUser>(`/users/${userId}`);
    return data;
}
const searchUsers = async (param:string)=>{
    const {data:{users}} = await axiosInstance.get<IUserResponse>(`/users/search?q=${param}`)
    return users;
}
axiosInstance.interceptors.request.use((request)=>{
    if(request.method?.toUpperCase() =="GET")
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('auth').accessToken;
    return request;
})
export{
    loadAuthUser,loadAuthUsers,searchUsers
}