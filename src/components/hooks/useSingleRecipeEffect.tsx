import {useEffect} from "react";

import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {singleRecipeSlice} from "../../redux/slices/recipeSlice/recipeSlice.ts";
import {loadAuthRecipe} from "../../service_N_helpers/recipes.service.ts";

export const useSingleRecipeEffect = (state:string)=>{
    const {singleRecipeSlice:{recipe}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        loadAuthRecipe(parseInt(state)).then(obj=>{
            dispatch(singleRecipeSlice.actions.loadRecipe(obj))
        })
    }, []);
    return recipe;
}