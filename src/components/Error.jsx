import { useRouteError } from "react-router-dom"

const Err = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOPs something Went Wrong</h1>
        </div>
    )
}
export default Err