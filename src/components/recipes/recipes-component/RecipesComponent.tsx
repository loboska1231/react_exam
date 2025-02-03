import {useSearchParams} from "react-router";
import {useEffect} from "react";
import {loadAuthRecipes} from "../../../service_N_helpers/api.service.ts";
import {RecipeComponent} from "../recipe-component/RecipeComponent.tsx";

import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {recipeSlice} from "../../../redux/slices/recipeSlice/recipeSlice.ts";

export const RecipesComponent = () => {
    const [query] = useSearchParams('pg');
    const {recipeSlice: {recipes}} = useAppSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        const t= query.get('pg');
        loadAuthRecipes((!t? 0 : +t )).then(obj=>{
                dispatch( recipeSlice.actions.loadRecipes(obj))
        })
    }, [query]);
    return (
        <>
            {recipes.map(recipe => <RecipeComponent key={recipe.userId} recipe={recipe}/>)}
        </>
    );
};