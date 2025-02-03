import {FC, useEffect, useState} from "react";
import {IUser} from "../../../models/users_model/IUser.ts";
import {loadAuthRecipeOfUser} from "../../../service_N_helpers/api.service.ts";
import {IRecipe} from "../../../models/recipes_model/IRecipe.ts";
import {Link} from "react-router";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {singleRecipeSlice} from "../../../redux/slices/recipeSlice/recipeSlice.ts";
type userProp= {user:IUser}
export const UserDetailComponent:FC<userProp> = ({user}) => {

    const {singleRecipeSlice:{recipe}} = useAppSelector(state => state)
    const dispatch = useAppDispatch();
    useEffect(() => {
        loadAuthRecipeOfUser(user.id).then(obj=>{
            dispatch(singleRecipeSlice.actions.loadRecipe(obj))
        })
    }, []);
    return (
        <div>
            <ul>
                <li>{user.id}</li>
                <li>{user.firstName} {user.lastName}</li>
                <li>nickname(username) :: {user.username}</li>
                <li>age :: {user.age}</li>
                <li>address(city) :: {user?.address.city}</li>
                <li> card number :: {user.bank.cardNumber}</li>
                <li> card type :: {user.bank.cardType}</li>
                <li> weight :: {user.weight}</li>
               <li> {(!recipe)? 'dont have recipes' : <Link className='text-blue-700' to={'recipeDetails'} state={recipe}> {recipe.name}</Link> }</li>
            </ul>
        </div>
    );
};