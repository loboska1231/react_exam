import {useSearchParams} from "react-router";
import {FC, useEffect, useState} from "react";
import {IRecipe} from "../../../models/recipes_model/IRecipe.ts";
import {loadAuthRecipesByTag, refresh} from "../../../service_N_helpers/api.service.ts";
import {RecipeComponent} from "../recipe-component/RecipeComponent.tsx";

type tagProp = {tag:string}
export const RecipesByTagComponent:FC<tagProp> = ({tag}) => {
    const [query] = useSearchParams('pg');
    const [recipes,setRecipes] = useState<IRecipe[]>([]);
    useEffect(() => {
        const t = query.get('pg');
        if(t)
            loadAuthRecipesByTag(tag,+t)
                .then(obj=>setRecipes(obj))
                .catch(()=>{
                    refresh().then(()=>{
                        loadAuthRecipesByTag(tag,+t)
                            .then(obj=>setRecipes(obj))
                    })
                })
        else
            loadAuthRecipesByTag(tag,0)
                .then(obj=>setRecipes(obj))
                .catch(()=>{
                    refresh().then(()=>{
                        loadAuthRecipesByTag(tag,0)
                            .then(obj=>setRecipes(obj))
                    })
                })
    }, [recipes]);
    return (
        <>
            {recipes.map(recipe => <RecipeComponent key={recipe.id} recipe={recipe}/>)}
        </>
    );
};