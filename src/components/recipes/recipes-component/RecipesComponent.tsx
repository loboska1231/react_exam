import {useSearchParams} from "react-router";
import {useEffect, useState} from "react";
import {IRecipe} from "../../../models/recipes_model/IRecipe.ts";
import {loadAuthRecipes, refresh} from "../../../service_N_helpers/api.service.ts";
import {RecipeComponent} from "../recipe-component/RecipeComponent.tsx";

export const RecipesComponent = () => {
    const [query] = useSearchParams('pg');
    const [recipes,setRecipes] = useState<IRecipe[]>([]);
    useEffect(() => {
        const t = query.get('pg');
        if(t)
            loadAuthRecipes(+t)
                .then(obj=>setRecipes(obj))
                .catch((reason)=>{
                    console.log(reason);
                    refresh().then(()=>{
                        loadAuthRecipes(+t)
                            .then(obj=>setRecipes(obj))
                    })
                })
        else
            loadAuthRecipes(0)
                .then(obj=>setRecipes(obj))
                .catch((reason)=>{
                    console.log(reason);
                    refresh().then(()=>{
                        loadAuthRecipes(0)
                            .then(obj=>setRecipes(obj))
                    })
                })
    }, []);
    return (
        <>
            {recipes.map(recipe=><RecipeComponent recipe={recipe}/> )}
        </>
    );
};