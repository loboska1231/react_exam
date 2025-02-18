import {configureStore} from "@reduxjs/toolkit";

import {singleUserSlice, userSearchSlice, usersSlice} from "./slices/userSlice/usersSlice.ts";
import {recipeSearchSlice, recipeSlice, singleRecipeSlice} from "./slices/recipeSlice/recipeSlice.ts";
import {contextSlice} from "./slices/contextSlice/contextSlice.ts";

export const store=configureStore({
    reducer:{
        userSlice:usersSlice.reducer,
        userSearchSlice:userSearchSlice.reducer,
        singleUserSlice:singleUserSlice.reducer,
        recipeSlice:recipeSlice.reducer,
        singleRecipeSlice:singleRecipeSlice.reducer,
        recipeSearchSlice:recipeSearchSlice.reducer,
        contextSlice:contextSlice.reducer
    }
})