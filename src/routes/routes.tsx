import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {Authentification} from "../pages/Authentification.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {RecipesPage} from "../pages/RecipesPage.tsx";

export const routes = createBrowserRouter([
    {path:'',element:<MainLayout/>,children:[
            {path:'auth',element:<Authentification/>},
            {path:'users',element:<UsersPage/>},
            {path:'recipes',element:<RecipesPage/>}
        ]}
])