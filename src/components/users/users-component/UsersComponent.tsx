import {UserComponent} from "../user-component/UserComponent.tsx";
import {useEffect} from "react";
import {useSearchParams} from "react-router";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {usersSlice} from "../../../redux/slices/userSlice/usersSlice.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {loadAuthUsers} from "../../../service_N_helpers/users.service.ts";


export const UsersComponent = () => {
    const [query] = useSearchParams('pg')
    const {userSlice: {users}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const t= query.get('pg');
            loadAuthUsers((!t? 0 : +t )).then(obj=>{
                dispatch( usersSlice.actions.loadUsers(obj))
            })
    }, [query]);
    return (
        <>
            {   (users.length>1)?
                    users.map(user=><UserComponent key={user.id} user={user}/>)
                : <p>end</p>
            }
        </>
    );
};