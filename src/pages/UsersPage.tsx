import {Pagination} from "../components/pagination/Pagination.tsx";
import {UsersComponent} from "../components/users/users-component/UsersComponent.tsx";

export const UsersPage = () => {
    return (
        <>
            <h2>List of users</h2>
            <UsersComponent/>
            <Pagination/>
        </>
    );
};