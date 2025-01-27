import {FC} from "react";
import {IUser} from "../../../models/users_model/IUser.ts";
type userProp = {user:IUser}
export const UserComponent:FC<userProp> = ({user}) => {
    return (
        <div>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.id}</p>
        </div>
    );
};