import {useSearchParams} from "react-router";
import {FC, useEffect} from "react";
import {RecipeComponent} from "../recipe-component/RecipeComponent.tsx";
import {Pagination} from "../../pagination/Pagination.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {recipeSlice} from "../../../redux/slices/recipeSlice/recipeSlice.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {loadAuthRecipesByTag} from "../../../service_N_helpers/recipes.service.ts";
import {refresh} from "../../../service_N_helpers/api.service.ts";

type tagProp = {tag:string}
export const RecipesByTagComponent:FC<tagProp> = ({tag}) => {
    const [query] = useSearchParams('pg');
    const{recipeSlice:{recipes}}= useAppSelector(state => state);
    const dispath = useAppDispatch();
    useEffect(() => {
        const t = query.get('pg');
        loadAuthRecipesByTag(tag,(!t? 0 : +t))
            .then(obj=>dispath(recipeSlice.actions.loadRecipes(obj)))
            .catch(()=>{
                refresh().then(()=>{
                    loadAuthRecipesByTag(tag,(!t? 0 : +t))
                        .then(obj=>dispath(recipeSlice.actions.loadRecipes(obj)))
                })
            })
    }, [tag]);
    return (
        <>
            {recipes.map(recipe => <RecipeComponent key={recipe.id} recipe={recipe}/>)}
            {recipes.length>=11 ? <Pagination/>: <p>less or eq 10</p>}
        </>
    );
};