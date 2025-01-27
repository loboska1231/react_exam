import {useForm} from "react-hook-form";
import {login} from "../service_N_helpers/api.service.ts";
interface IUserForm {
    username:string,
    password:string
}
export const Authentification = () => {
    const {handleSubmit, register,formState:{isValid}} = useForm<IUserForm>()
    return (
        <div>
            <form onSubmit={handleSubmit((data)=>{
                login({...data})
            })}>
                <input type="text" placeholder={'user name'} {...register('username')}/>
                <input type="password" placeholder={'password'} {...register('password')}/>
                <button>log in</button>
            </form>
        </div>
    );
};