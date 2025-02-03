import {useNavigate} from "react-router";

export const BackButton = () => {
    const navigator =useNavigate()
    return (
        <div   className='bg-red-200' >
            <button onClick={()=>{
                navigator(-1)
            }}>back</button>
        </div>
    );
};