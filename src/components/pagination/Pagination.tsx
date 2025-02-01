import {useSearchParams} from "react-router";

export const Pagination = () => {
    const [query,setQuery] = useSearchParams({pg:'1'})
    return (
        <div>
            <button  onClick={()=>{
                const page = query.get('pg');
                if(page && +page >1){
                    let counter = +page;
                    setQuery({pg: (--counter).toString()})
                }

            }}>prev</button>
            <button onClick={()=>{
                const page = query.get('pg');
                if(page && +page >=1){
                    let counter = +page;
                    setQuery({pg: (++counter).toString()})
                }
            }}>next</button>
        </div>
    );
};