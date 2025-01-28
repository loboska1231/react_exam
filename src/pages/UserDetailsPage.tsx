import {useLocation} from "react-router";
import {Test} from "../components/users/user-details-component/Test.tsx";

export const UserDetailsPage = () => {
    const {state} = useLocation();
    console.log(state)
    return (
        <>
            <Test user={state}/>
        </>
    );
};