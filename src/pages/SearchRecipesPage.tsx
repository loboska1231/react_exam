import {RecipeComponent} from "../components/recipes/recipe-component/RecipeComponent.tsx";
import {useLocation} from "react-router";
import {useSearchRecipesEffect} from "../components/hooks/useSearchRecipeEffect.tsx";
import {useSingleRecipeEffect} from "../components/hooks/useSingleRecipeEffect.tsx";
import {BackButton} from "../components/back-button-component/BackButton.tsx";

export const SearchRecipesPage = () => {
    const {state} =useLocation()
    const recipe = useSingleRecipeEffect(state);
    const recipes = useSearchRecipesEffect(state);
    return (
        <>
            {
                (Number(state))? <RecipeComponent recipe={recipe}/>
                    : recipes.map(recipe=><RecipeComponent recipe={recipe}/>)
            }
            <BackButton/>
        </>
    );
};