import {useLocation} from "react-router";
import {BackButton} from "../components/back-button-component/BackButton.tsx";
import {useSingleEffect} from "../components/hooks/useSingleEffect.tsx";
import {UserComponent} from "../components/users/user-component/UserComponent.tsx";
import {useSearchEffect} from "../components/hooks/useSearchEffect.tsx";

export const SearchUsersPage = () => {
    const {state} = useLocation();
    const user = useSingleEffect(state);
    const users = useSearchEffect(state);
    return (
        <>
            {
                (Number(state)) ? <UserComponent key={user.id} user={user}/>
                    :users.map(user=><UserComponent key={user.id} user={user}/>)
            }
            <BackButton/>
        </>
    );
};