import {useEffect} from "react";
import {searchUsers} from "../../service_N_helpers/api.service.ts";
import {userSearchSlice} from "../../redux/slices/userSlice/usersSlice.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";

export const useSearchEffect = (state:string)=>{
    const {userSearchSlice:{users}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        searchUsers(state).then(obj=>{
            dispatch(userSearchSlice.actions.loadUsers(obj))
        })
    }, []);
    return users;
}