import {init, MyContextType} from "../../../context/MyContext.tsx";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialStateContext:MyContextType = init;
export const contextSlice=createSlice({
    name:'contextSlice',
    initialState:initialStateContext,
    reducers:{
        switchBool:(state,action:PayloadAction<boolean>)=>{
            state.bool_auth = action.payload
        }
    }
})