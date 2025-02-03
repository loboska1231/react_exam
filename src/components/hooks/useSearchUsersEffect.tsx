import {useEffect} from "react";
import {userSearchSlice} from "../../redux/slices/userSlice/usersSlice.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {searchUsers} from "../../service_N_helpers/users.service.ts";

export const useSearchUsersEffect = (state:string)=>{
    const {userSearchSlice:{users}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        searchUsers(state).then(obj=>{
            dispatch(userSearchSlice.actions.loadUsers(obj))
        })
    }, []);
    return users;
}