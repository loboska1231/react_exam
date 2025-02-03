import {useEffect} from "react";
import {loadAuthUser} from "../../service_N_helpers/api.service.ts";
import {singleUserSlice} from "../../redux/slices/userSlice/usersSlice.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";

export const useSingleEffect = (state:string)=>{
    const {singleUserSlice:{user}} = useAppSelector(state=>state)
    const dispatch = useAppDispatch();
    useEffect(() => {
        loadAuthUser(parseInt(state)).then(obj=>{
            dispatch(singleUserSlice.actions.loadUser(obj))
        })
    }, []);
    return user;
}