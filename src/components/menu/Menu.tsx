import {Link} from "react-router";
// import {UserLogo} from "../user-logo/UserLogo.tsx";


export const Menu = () => {
    return (
       <div>
           <div>
             <ul>
                 <li> <Link to={'login'}>Login</Link></li>
             </ul>
           </div>
           <div>
               {/*<UserLogo user={user}/> // ??*/}
              <ul>
                  <li> <Link to={'auth/users'}>list of users</Link></li>
                  <li><Link to={'auth/recipes'}>list of recipes</Link></li>
              </ul>
           </div>
       </div>
    );
};