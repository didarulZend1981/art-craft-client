import { FaGooglePlusG } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import UseAuthContext from "../../hooks/UseAuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const {googleLogin,FacebookLogin} =UseAuthContext();
  //navigation 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  
  const handleSocialLogin = socialProvider =>{

    socialProvider().then(result=>{
        if(result.user){
         navigate(from);
        }
    })


   }

  return (
    <div>
      <div className=" mx-auto grid grid-cols-2 gap-4 mt-5 my-auto min-h-max text-center mb-3 border-t-2 pt-5">
            <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-outline btn-primary"><FaGooglePlusG className='text-[red]'/> Google</button>


           
            <button onClick={()=>handleSocialLogin(FacebookLogin)} className="btn btn-outline btn-primary"><TiSocialFacebook className='text-[red]'/> Facebook</button>
             
      </div>
    </div>
  );
};

export default Social;