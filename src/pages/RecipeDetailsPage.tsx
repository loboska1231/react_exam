import {useLocation} from "react-router";
import {RecipeDetails} from "../components/recipes/recipes-details-component/RecipeDetails.tsx";
import {BackButton} from "../components/back-button-component/BackButton.tsx";

export const RecipeDetailsPage = () => {
    const {state} = useLocation();

    return (
        <div className='bg-green-200'>
            <RecipeDetails recipe={state}/>
            <BackButton/>
        </div>
    );
};