import {FC} from "react";
import {IRecipe} from "../../../models/recipes_model/IRecipe.ts";
import {Link} from "react-router";
type recipeProp= {recipe:IRecipe}
export const RecipeComponent:FC<recipeProp> = ({recipe}) => {
    console.log(recipe.tags)
    return (
        <div>
            blyudo =
            <Link>
                {recipe.name}
            </Link>,

            tags =
                {recipe.tags.map(t=> <Link>{t}  </Link>)}
        </div>
    );
};