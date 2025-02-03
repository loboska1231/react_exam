import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";
type formProp = {param: string}
export const Search = () => {
    const {register, handleSubmit} = useForm<formProp>();
   const navigator = useNavigate();
    return (
        <div>
            <h3>search by id, name(only 1 word) and tag ( only for recipes) </h3>
            <form onSubmit={handleSubmit((data)=>{
                navigator(`search`,{state: data.param})
                console.log(data.param)
            })}>
                <input type="text" {...register('param')} />
                <button>search</button>
            </form>
        </div>
    );
};