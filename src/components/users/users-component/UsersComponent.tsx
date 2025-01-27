import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {

    return (
        <>
            {users.map(user=><UserComponent key={user.id} user={user}/>)}
        </>
    );
};