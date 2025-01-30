import {Outlet, useLocation} from "react-router";
import {Test} from "../components/users/user-details-component/Test.tsx";

export const UserDetailsPage = () => {
    const {state} = useLocation();
    return (
        <>
            <Test user={state}/>
            <Outlet/>
        </>
    );
};