import {useNavigate} from "react-router";

export const BackButton = () => {
    const navigator =useNavigate()
    return (
        <>
            <button onClick={()=>{
                navigator(-1)
            }}>back</button>
        </>
    );
};