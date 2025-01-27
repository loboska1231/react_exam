import axios from "axios";
import {IUserWithTokens} from "../models/users_model/IUserWithTokens.ts";
import {IUserResponse} from "../models/users_model/IUserResponse.ts";
import {IRecipeResponse} from "../models/recipes_model/IRecipeResponse.ts";
import {ITokens} from "../models/tokens/ITokens.ts";

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/auth',
    headers:{}
});
type userProp ={
    username:string,
    password:string;
}
const login  = async({username,password}:userProp) =>{
    const {data} = await axiosInstance.post<IUserWithTokens>('/login',{username,password});
    localStorage.setItem('auth',JSON.stringify(data));
    console.log(data)
}
const loadAuthUsers = async (pg:number) =>{
    const {data:{users}} = await axiosInstance.get<IUserResponse>(`/users?skip=${(pg>1)?(pg-1)*30:0}`);
    return users;
}
const loadAuthRecipes = async (pg:number) =>{
    const {data:{recipes}} = await axiosInstance.get<IRecipeResponse>(`/recipes?skip=${(pg>1)?(pg-1)*30:0}`);
    return recipes;
}
const refresh = async () =>{
    const userWithTokens  = retriveLocalStorage<IUserWithTokens>('auth');
    const {data:{accessToken,refreshToken}}= await axiosInstance.post<ITokens>('/refresh',
        {refreshToken: userWithTokens.refreshToken,
        expiresInMin:5});
    userWithTokens.refreshToken = refreshToken;
    userWithTokens.accessToken = accessToken;
    localStorage.setItem('auth',JSON.stringify(userWithTokens));
}

axiosInstance.interceptors.request.use((request)=>{
    if(request.method?.toUpperCase() =="GET")
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    return request;
})

export {
    login, loadAuthRecipes,loadAuthUsers,refresh
}
