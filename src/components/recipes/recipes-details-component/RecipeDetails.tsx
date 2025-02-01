import {FC, useEffect, useState} from "react";
import {IUser} from "../../../models/users_model/IUser.ts";
import {loadAuthUser} from "../../../service_N_helpers/api.service.ts";
import {Link} from "react-router";
import {IRecipe} from "../../../models/recipes_model/IRecipe.ts";
type recipeProp = {recipe:IRecipe};
export const RecipeDetails:FC<recipeProp> = ({recipe}) => {
    const [user,setUser] = useState<IUser>();
    useEffect(() => {
        loadAuthUser(recipe.userId).then(obj=>setUser(obj))
    }, []);
    return (
        <div>
            <ul>
                <li>{recipe.name}</li>
                <li>{recipe.rating}</li>
                <li>user id ::{recipe.userId}</li>
                <li>tags
                    <ol>
                        {recipe.tags.map(tag=><li><Link to={`/auth/recipes/recipesByTag/${tag}`}>{tag}</Link></li>)}
                    </ol>
                </li>
                <img style={{width: 400}} src={recipe.image} alt={recipe.name}/>
                <li>{(!user)? 'dont have user':<Link to={'/auth/users/details'} state={user}>{user.username} </Link>}</li>
            </ul>
        </div>
    );
};