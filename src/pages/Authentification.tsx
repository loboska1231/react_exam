import {useForm} from "react-hook-form";
import {login} from "../service_N_helpers/api.service.ts";
import {validForAuth} from "../components/validation/valid.ts";
import {joiResolver} from "@hookform/resolvers/joi";
interface IUserForm {
    username:string,
    password:string,
    expiresInMins:number
}
export const Authentification = () => {
    const {handleSubmit, register,formState:{isValid}} = useForm<IUserForm>({
        mode:'all',
        resolver: joiResolver(validForAuth)
    })
    return (
        <div>
            <form onSubmit={handleSubmit((data)=>{
                (data.expiresInMins<1 || !data.expiresInMins)
                    ? login({...data,expiresInMins:60})
                    : login(data)
               // if(t == 'OK') <UserLogo user={data}/>
            })}>
                <input type="text" placeholder={'user name'} {...register('username')}/>
                <input type="password" placeholder={'password'} {...register('password')}/>
                <input type="number" placeholder={'minute'} {...register('expiresInMins')}/>
                <button disabled={!isValid}>log in</button>
            </form>
        </div>
    );
};