import {IRecipeResponse} from "../models/recipes_model/IRecipeResponse.ts";
import {IRecipe} from "../models/recipes_model/IRecipe.ts";
import {axiosInstance} from "./api.service.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {IUserWithTokens} from "../models/users_model/IUserWithTokens.ts";

const loadAuthRecipes = async (pg:number) =>{
    const {data:{recipes}} = await axiosInstance.get<IRecipeResponse>(`/recipes?skip=${(pg>1)?(pg-1)*10:0}&limit=10`);
    return recipes;
}
const loadAuthRecipeOfUser = async (userId:number) =>{
    const {data:{recipes}} = await axiosInstance.get<IRecipeResponse>(`/recipes`);
    return recipes.find(t=>t.userId == userId);
}
const loadAuthRecipe = async (id:number) =>{
    const {data} = await axiosInstance.get<IRecipe>(`/recipes/${id}`);
    console.log(data)
    return data;
}
const loadAuthRecipesByTag = async (tag:string,pg:number) =>{
    const {data:{recipes}} = await axiosInstance.get<IRecipeResponse>(`/recipes/tag/${tag}?skip=${(pg>1)?(pg-1)*10:0}&limit=10`)
    return recipes;
}
const searchRecipes = async (param:string)=>{
    const {data:{recipes}} = await axiosInstance.get<IRecipeResponse>(`/recipes/search?q=${param}`)
    return recipes
}
axiosInstance.interceptors.request.use((request)=>{
    if(request.method?.toUpperCase() =="GET")
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('auth').accessToken;
    return request;
})
export{
    loadAuthRecipeOfUser,loadAuthRecipe,loadAuthRecipesByTag,loadAuthRecipes,searchRecipes
}