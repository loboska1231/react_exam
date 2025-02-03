import {RecipesComponent} from "../components/recipes/recipes-component/RecipesComponent.tsx";
import {Pagination} from "../components/pagination/Pagination.tsx";
import {Search} from "../components/search-component/Search.tsx";

export const RecipesPage = () => {
    return (
        <>
            <Search/>
            <h2>List of recipes</h2>
            <RecipesComponent/>
            <Pagination/>
        </>
    );
};