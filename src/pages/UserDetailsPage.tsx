import {useLocation} from "react-router";
import {UserDetailComponent} from "../components/users/user-details-component/UserDetailComponent.tsx";
import {BackButton} from "../components/back-button-component/BackButton.tsx";

export const UserDetailsPage = () => {
    const {state} = useLocation();
    return (
        <>
            <UserDetailComponent user={state}/>
            <BackButton/>
        </>
    );
};