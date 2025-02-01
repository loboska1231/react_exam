import {RecipesComponent} from "../components/recipes/recipes-component/RecipesComponent.tsx";
import {Pagination} from "../components/pagination/Pagination.tsx";

export const RecipesPage = () => {
    return (
        <>
            <h2>List of recipes</h2>
            <RecipesComponent/>
            <Pagination/>
        </>
    );
};