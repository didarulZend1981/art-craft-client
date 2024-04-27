import { Navigate, useLocation } from "react-router-dom";
import UseAuthContext from "../hooks/UseAuthContext";



const PrivateRoute = ({children}) => {
  const {user} = UseAuthContext();
  const location = useLocation();
  if(!user){
    return<Navigate to='/login' state={location?.pathname || '/'}/>
  }
  return(
    <div>{children}</div>
  );

};

export default PrivateRoute;