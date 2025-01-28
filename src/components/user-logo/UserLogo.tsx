import {FC} from "react";
import {IUser} from "../../models/users_model/IUser.ts";
type userLogoProp = {user: IUser}
export const UserLogo:FC<userLogoProp> = ({user}) => {
    return (
        <div>
            <img src={user.image} alt={user.lastName}/>
            <p>{user.lastName}, {user.firstName}</p>
        </div>
    );
};