import {FC} from "react";
import {IUser} from "../../../models/users_model/IUser.ts";
type userProp= {user:IUser}
export const Test:FC<userProp> = ({user}) => {
    return (
        <div>
            <ul>
                <li>{user.firstName} {user.lastName}</li>
                <li>nickname(username) :: {user.username}</li>
                <li>age :: {user.age}</li>
                <li>address(city) :: {user.address.city}</li>
                <li> card number :: {user.bank.cardNumber}</li>
                <li> card type :: {user.bank.cardType}</li>
                <li> weight :: {user.weight}</li>
            </ul>
        </div>
    );
};