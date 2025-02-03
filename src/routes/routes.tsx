import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {Authentification} from "../pages/Authentification.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {RecipesPage} from "../pages/RecipesPage.tsx";
import {UserDetailsPage} from "../pages/UserDetailsPage.tsx";
import {RecipeDetailsPage} from "../pages/RecipeDetailsPage.tsx";
import {RecipesByTagPage} from "../pages/RecipesByTagPage.tsx";
import {SearchUsersPage} from "../pages/SearchUsersPage.tsx";

export const routes = createBrowserRouter([
    {path:'',element:<MainLayout/>,children:[
            {path:'login',element:<Authentification/>},
            {path:'auth/users',element:<UsersPage/>},
            {path:'auth/users/search',element:<SearchUsersPage/>},
            {path:'auth/users/details',element:<UserDetailsPage/>},
            {path:'auth/users/details/recipeDetails',element:<RecipeDetailsPage/>},

            {path:'auth/recipes',element:<RecipesPage/>},
            {path:'auth/recipes/recipeDetails',element:<RecipeDetailsPage/>},
            {path:'auth/recipes/recipesByTag/:tag',element:<RecipesByTagPage/>}
        ]}
])