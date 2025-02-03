import {FC} from "react";
import {IRecipe} from "../../../models/recipes_model/IRecipe.ts";
import {Link} from "react-router";

type recipeProp= {recipe:IRecipe}
export const RecipeComponent:FC<recipeProp> = ({recipe}) => {

    return (
        <div >
            recipe id :: {recipe.id},
            dish = <Link className='text-blue-700'
            to={'/auth/recipes/recipeDetails'} state={recipe}>{recipe.name}</Link>,
            tags = {recipe.tags.map(tag=> <Link className='text-blue-700'
                   to={`/auth/recipes/recipesByTag/${tag}`}>{tag}  </Link>)}
        </div>
    );
};