import {Link} from "react-router";
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";
import {UserLogo} from "../user-logo/UserLogo.tsx";

export const Menu = () => {
    const {bool_auth} = useContext(MyContext);
    return (
       <>
           {bool_auth ?
               <div>
                   <UserLogo/>
                   <ul>
                       <li><Link to={'auth/users'}>list of users</Link></li>
                       <li><Link to={'auth/recipes'}>list of recipes</Link></li>
                   </ul>
               </div>
               : <Link to={'login'}>Login</Link>}

       </>
    );
};