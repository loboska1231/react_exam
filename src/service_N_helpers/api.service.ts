import axios from "axios";
import {IUserWithTokens} from "../models/users_model/IUserWithTokens.ts";
import {IUserResponse} from "../models/users_model/IUserResponse.ts";
import {IRecipeResponse} from "../models/recipes_model/IRecipeResponse.ts";
import {ITokens} from "../models/tokens/ITokens.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {IUser} from "../models/users_model/IUser.ts";
import {IRecipe} from "../models/recipes_model/IRecipe.ts";

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/auth',
    headers:{}
});
type userProp ={
    username:string,
    password:string,
    expiresInMins:number
}
const login  = async({username,password,expiresInMins}:userProp) =>{
    const {data} = await axiosInstance.post<IUserWithTokens>('/login',{username,password,expiresInMins});
    localStorage.setItem('auth',JSON.stringify(data));
}
const loadAuthUsers = async (pg:number) =>{
    const {data:{users}} = await axiosInstance.get<IUserResponse>(`/users?skip=${(pg>1)?(pg-1)*10:0}&limit=10`);
    return users;
}
const loadAuthUser = async (userId:number) =>{
    const {data} = await axiosInstance.get<IUser>(`/users/${userId}`);
    console.log(data)
    return data;
}
const loadAuthRecipes = async (pg:number) =>{
    const {data:{recipes}} = await axiosInstance.get<IRecipeResponse>(`/recipes?skip=${(pg>1)?(pg-1)*10:0}&limit=10`);
    return recipes;
}
const loadAuthRecipe = async (userId:number) =>{
    const {data:{recipes}} = await axiosInstance.get<IRecipeResponse>(`/recipes`);
    return recipes.find(t=>t.userId == userId);
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
    console.log(request)
    if(request.method?.toUpperCase() =="GET")
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('auth').accessToken;
    return request;
})
axiosInstance.interceptors.response.use((response)=>{
    console.log(response)
    return response;
})
export {
    login, loadAuthRecipes,loadAuthUsers,refresh,loadAuthUser, loadAuthRecipe
}
