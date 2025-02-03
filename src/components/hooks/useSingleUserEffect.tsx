import {useEffect} from "react";

import {singleUserSlice} from "../../redux/slices/userSlice/usersSlice.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {loadAuthUser} from "../../service_N_helpers/users.service.ts";

export const useSingleUserEffect = (state:string)=>{
    const {singleUserSlice:{user}} = useAppSelector(state=>state)
    const dispatch = useAppDispatch();
    useEffect(() => {
        loadAuthUser(parseInt(state)).then(obj=>{
            dispatch(singleUserSlice.actions.loadUser(obj))
        })
    }, []);
    return user;
}