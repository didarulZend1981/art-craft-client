import { useContext } from "react";
import { AuthContext } from "../fireBaseProvider/FirebaseProvider";


const UseAuthContext = () => {
  const all =useContext(AuthContext);
  return all;
};

export default UseAuthContext;