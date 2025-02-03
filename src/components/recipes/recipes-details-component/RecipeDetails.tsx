import {FC, useEffect} from "react";
import {Link} from "react-router";
import {IRecipe} from "../../../models/recipes_model/IRecipe.ts";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {singleUserSlice} from "../../../redux/slices/userSlice/usersSlice.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {loadAuthUser} from "../../../service_N_helpers/users.service.ts";

type recipeProp = {recipe:IRecipe};
export const RecipeDetails:FC<recipeProp> = ({recipe}) => {
    const{singleUserSlice:{user}} = useAppSelector(state => state)
    const dispath = useAppDispatch();
    useEffect(() => {
        loadAuthUser(recipe.userId).then(obj=>dispath(singleUserSlice.actions.loadUser(obj)))
    }, []);
    return (
        <div>
            <ul>
                <li>{recipe.name}</li>
                <li>{recipe.rating}</li>
                <li>user id ::{recipe.userId}</li>
                <li>tags
                    <ol>
                        {recipe.tags.map(tag=><li><Link className='text-blue-700' to={`/auth/recipes/recipesByTag/${tag}`}>{tag}</Link></li>)}
                    </ol>
                </li>
                <img style={{width: 400}} src={recipe.image} alt={recipe.name}/>
                <li>{(!user)? 'dont have user':<Link className='text-blue-700' to={'/auth/users/details'} state={user}>{user.username} </Link>}</li>
            </ul>
        </div>
    );
};