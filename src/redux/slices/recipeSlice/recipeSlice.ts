import {IRecipe} from "../../../models/recipes_model/IRecipe.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type recipeSliceType = {recipes:IRecipe[]};
type singleRecipeSliceType = {recipe:IRecipe};
type recipeSearchSliceType = {recipes:IRecipe[]}

const initialStateRecipe:recipeSliceType = {recipes:[]}
const initialStateSingleRecipe:singleRecipeSliceType = {recipe:{}}
const initialStateSearchRecipe:recipeSearchSliceType = {recipes:[]}
export const recipeSearchSlice = createSlice({
    name:'recipeSearchSlice',
    initialState:initialStateSearchRecipe,
    reducers:{
        loadRecipes:(state, action:PayloadAction<IRecipe[]>)=>{
            state.recipes = action.payload
        }
    }
})
export const singleRecipeSlice= createSlice({
    name:'singleRecipeSlice',
    initialState:initialStateSingleRecipe,
    reducers:{
        loadRecipe:(state,action:PayloadAction<IRecipe>)=>{
            state.recipe = action.payload;
        },
    },
})
export const recipeSlice = createSlice({
    name:'recipeSlice',
    initialState:initialStateRecipe,
    reducers:{
        loadRecipes:(state,action:PayloadAction<IRecipe[]>)=>{
            state.recipes = action.payload;
        },
    }
});