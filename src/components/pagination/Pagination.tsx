import {useNavigate, useSearchParams} from "react-router";

export const Pagination = () => {
    const navigate = useNavigate();
    const [query,setQuery] = useSearchParams({pg:'1'})
    let t = query.get('pg')
    return (
        <div>
            <button  onClick={()=>{

                navigate(`/auth/users?pg=${(!t)?1:t}`)
                const page = query.get('pg');
                if(page && +page >1){
                    let counter = +page;
                    setQuery({pg: (--counter).toString()})
                }

            }}>prev</button>
            <button onClick={()=>{
                navigate(`/auth/users?pg=${(!t)?1:t}`)
                const page = query.get('pg');
                if(page && +page >=1){
                    let counter = +page;
                    setQuery({pg: (++counter).toString()})
                }
            }}>next</button>
        </div>
    );
};