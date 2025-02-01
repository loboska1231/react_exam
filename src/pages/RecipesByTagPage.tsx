import {RecipesByTagComponent} from "../components/recipes/recipes-by-tag-component/RecipesByTagComponent.tsx";
import {useParams} from "react-router";
import {Pagination} from "../components/pagination/Pagination.tsx";

export const RecipesByTagPage = () => {
    const {tag} = useParams();
    return (
        <div>
            <h2>List of recipes ( by tag )</h2>
            <RecipesByTagComponent tag={tag}/>
            <Pagination/>
        </div>
    );
};