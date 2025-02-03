import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../models/users_model/IUser.ts";
type userSliceType = {users:IUser[]};
type searchUserSliceType = {users:IUser[]}
type singleUserSliceType = {user:IUser}
const initialStateUser:userSliceType = {users:[]}
const initialStateSingleUser :singleUserSliceType ={user:{}};

const initialStateSearchUsers:searchUserSliceType = {users:[]}
export const usersSlice = createSlice({
    name:'usersSlice',
    initialState:initialStateUser,
    reducers:{
        loadUsers: (state,action:PayloadAction<IUser[]>)=>{
            state.users = action.payload;
        }
    }
});

export const singleUserSlice = createSlice({
    name:'singleUserSlice',
    initialState:initialStateSingleUser,
    reducers:{
        loadUser:(state,action:PayloadAction<IUser>)=>{
            state.user = action.payload;
        }
    }
})
export const userSearchSlice = createSlice({
    name:'userSearchslice',
    initialState:initialStateSearchUsers,
    reducers:{
        loadUsers:(state,action:PayloadAction<IUser[]>)=>{ // костыль
            state.users = action.payload;
        }
    }
})