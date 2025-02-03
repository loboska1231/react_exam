import axios from "axios";
import {IUserWithTokens} from "../models/users_model/IUserWithTokens.ts";
import {ITokens} from "../models/tokens/ITokens.ts";
import {retriveLocalStorage} from "./helpers.ts";

export const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/auth',
    headers:{}
});
type userProp ={
    username:string,
    password:string,
    expiresInMins:number
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
const login  = async({username,password,expiresInMins}:userProp) =>{
    const {data,statusText} = await axiosInstance.post<IUserWithTokens>('/login',{username,password,expiresInMins});
    localStorage.setItem('auth',JSON.stringify(data));
    console.log(statusText)
    return statusText;
}
export {
    login,refresh,
}
