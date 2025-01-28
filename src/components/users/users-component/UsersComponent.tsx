import {UserComponent} from "../user-component/UserComponent.tsx";
import {useEffect, useState} from "react";
import {IUser} from "../../../models/users_model/IUser.ts";
import {loadAuthUsers, refresh} from "../../../service_N_helpers/api.service.ts";
import {useSearchParams} from "react-router";

export const UsersComponent = () => {
    const [query] = useSearchParams('pg');
    const [users,setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const t = query.get('pg');
        if(t)
            loadAuthUsers(+t)
                .then(obj=>setUsers(obj))
                .catch((reason)=>{
                    console.log(reason)
                    refresh().then(()=>{
                        loadAuthUsers(+t)
                            .then(obj=>setUsers(obj))
                    })
                })
        else
            loadAuthUsers(0)
                .then(obj=>setUsers(obj))
                .catch((reason)=>{
                    console.log(reason);
                    refresh().then(()=>{
                        loadAuthUsers(0).then(obj=>setUsers(obj))
                    })
                })
    }, [query]);
    return (
        <>
            {users.map(user=><UserComponent key={user.id} user={user}/>)}
        </>
    );
};