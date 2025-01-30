import {FC, useEffect, useState} from "react";
import {IUser} from "../../../models/users_model/IUser.ts";
import {loadAuthRecipe} from "../../../service_N_helpers/api.service.ts";
import {IRecipe} from "../../../models/recipes_model/IRecipe.ts";
import {Link} from "react-router";
type userProp= {user:IUser}
export const Test:FC<userProp> = ({user}) => {
    const [recipe,setRecipe] = useState<IRecipe>();
    useEffect(() => {
        loadAuthRecipe(user.id).then(obj=>setRecipe(obj))
    }, []);
    return (
        <div>
            <ul>
                <li>{user.id}</li>
                <li>{user.firstName} {user.lastName}</li>
                <li>nickname(username) :: {user.username}</li>
                <li>age :: {user.age}</li>
                {/*<li>address(city) :: {user?.address.city}</li>*/}
                {/*<li> card number :: {user.bank.cardNumber}</li>*/}
                {/*<li> card type :: {user.bank.cardType}</li>*/}
                <li> weight :: {user.weight}</li>
               <li> {(!recipe)? 'dont have recipes' : <Link to={'recipeDetails'} state={recipe}> {recipe.name}</Link> }</li>
            </ul>
        </div>
    );
};