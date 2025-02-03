import {Menu} from "../components/menu/Menu.tsx";
import {Outlet} from "react-router";
import {MyContext} from "../context/MyContext.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {contextSlice} from "../redux/slices/contextSlice/contextSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";


export const MainLayout = () => {
    const {contextSlice:{bool_auth}} = useAppSelector(state => state)
    const dispatch = useAppDispatch();
    const t:boolean = !localStorage.getItem('auth') ? bool_auth : true;
    return (
        <>
            <MyContext.Provider value={{
                bool_auth:t,
                MySwitch:(obj)=>{
                    dispatch(contextSlice.actions.switchBool(obj))
                }
            }}>
                <h1>Main</h1>
                <Menu/>
                <hr/>
                <Outlet/>
            </MyContext.Provider>
        </>
    );
};