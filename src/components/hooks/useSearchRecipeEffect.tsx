import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {recipeSearchSlice} from "../../redux/slices/recipeSlice/recipeSlice.ts";
import {searchRecipes} from "../../service_N_helpers/recipes.service.ts";

export const useSearchRecipesEffect = (state:string)=>{
    const {recipeSearchSlice:{recipes}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        searchRecipes(state).then(obj=>{
            dispatch(recipeSearchSlice.actions.loadRecipes(obj))
        })
    }, []);
    return recipes;
}