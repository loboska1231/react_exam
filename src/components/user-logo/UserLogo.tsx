import {IUser} from "../../models/users_model/IUser.ts";

export const UserLogo= () => {
    const user:IUser = JSON.parse(localStorage.getItem('auth'));
    return (
        <div>
            <img style={{width:50}} src={user.image} alt={user.lastName}/>
            <p>{user.lastName}, {user.firstName}</p>
        </div>
    );
};