import { Navigate, useLocation } from "react-router-dom";
import UseAuthContext from "../hooks/UseAuthContext";



const PrivateRoute = ({children}) => {
  const {user,loading} = UseAuthContext();
  const location = useLocation();
  if(loading){
    return <><span className="loading loading-bars loading-xs"></span>
    <span className="loading loading-bars loading-sm"></span>
    <span className="loading loading-bars loading-md"></span>
    <span className="loading loading-bars loading-lg"></span></>
  }
  if(!user){
    return<Navigate to='/login' state={location?.pathname || '/'}/>
  }
  return(
    <div>{children}</div>
  );

};

export default PrivateRoute;