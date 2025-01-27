import {Menu} from "../components/menu/Menu.tsx";
import {Outlet} from "react-router";

export const MainLayout = () => {
    return (
        <>
            <h1>Main</h1>
            <Menu/>
            <hr/>
            <Outlet/>

        </>
    );
};