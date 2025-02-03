import {useLocation} from "react-router";
import {BackButton} from "../components/back-button-component/BackButton.tsx";
import {useSingleUserEffect} from "../components/hooks/useSingleUserEffect.tsx";
import {UserComponent} from "../components/users/user-component/UserComponent.tsx";
import {useSearchUsersEffect} from "../components/hooks/useSearchUsersEffect.tsx";

export const SearchUsersPage = () => {
    const {state} = useLocation();
    const user = useSingleUserEffect(state);
    const users = useSearchUsersEffect(state);
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