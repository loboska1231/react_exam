import {createContext} from "react";

export type MyContextType = {
    bool_auth: boolean,
    MySwitch:(obj:boolean)=> void
}
export const init ={
    bool_auth: false,
    MySwitch:(obj:boolean)=>{
        console.log(obj)
    }
}
export const MyContext = createContext<MyContextType>(init);