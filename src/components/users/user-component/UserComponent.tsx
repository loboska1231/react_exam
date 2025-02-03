import {FC} from "react";
import {IUser} from "../../../models/users_model/IUser.ts";
import {Link} from "react-router";

type userProp = {user:IUser}
export const UserComponent:FC<userProp> = ({user}) => {
    return (
        <Link className='text-blue-700'
              to={`details`} state={user}>
            <div>
                <p>{user.firstName} {user.lastName} {user.maidenName}</p>
            </div>
        </Link>
    );
};