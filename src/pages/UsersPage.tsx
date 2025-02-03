import {Pagination} from "../components/pagination/Pagination.tsx";
import {UsersComponent} from "../components/users/users-component/UsersComponent.tsx";
import {Search} from "../components/search-component/Search.tsx";

export const UsersPage = () => {
    return (
        <div className='bg-green-200 '>
            <Search/>
            <h2>List of users</h2>
            <UsersComponent/>
            <Pagination/>
        </div>
    );
};