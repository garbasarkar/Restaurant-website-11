import { useContext } from "react";
import { AuthContext } from "./PrivateAuth";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return(
            <div className="flex justify-center">
                <span className="loading loading-spinner loading-md"></span>
            </div>
        )
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouter;