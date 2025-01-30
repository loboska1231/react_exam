import {useLocation} from "react-router";
import {RecipeDetails} from "../components/recipes/recipes-details-component/RecipeDetails.tsx";

export const RecipeDetailsPage = () => {
    const {state} = useLocation();
    return (
        <div>
            <RecipeDetails recipe={state}/>
        </div>
    );
};