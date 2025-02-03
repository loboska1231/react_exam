import {useForm} from "react-hook-form";
import {login} from "../service_N_helpers/api.service.ts";
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";
import {useNavigate} from "react-router";

interface IUserForm {
    username:string,
    password:string,
    expiresInMins:number
}
export const Authentification = () => {
    const {MySwitch} =useContext(MyContext);
    const {handleSubmit, register} = useForm<IUserForm>({
        mode:'all',
    })
    const navigator = useNavigate();
    return (
        <div>
            <form className='w-70 flex flex-col'
                  onSubmit={handleSubmit((data)=>{
                login({...data,expiresInMins:(!data.expiresInMins ? 60 : data.expiresInMins)})
                    .then(status=>{
                        if(status=='OK') {
                            MySwitch(true);
                            navigator('/')
                        }
                    })
            })}>
                <input className='border-black border-solid'
                    type="text" placeholder={'user name'} {...register('username')}/>
                <input type="password" placeholder={'password'} {...register('password')}/>
                <input type="number" placeholder={'minute'} {...register('expiresInMins')}/>
                <button className='bg-gray-300'>log in</button>
            </form>
        </div>
    );
};