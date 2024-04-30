import {  useState } from "react";
import { useForm } from "react-hook-form";
import Social from "../../components/Social/Social";
import { FaEye } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import UseAuthContext from "../../hooks/UseAuthContext";

const Registration = () => {
  const [showPassword,setShowPassword]=useState(false);
  const {createUser,updatUserProfile} = UseAuthContext();
  const { register,handleSubmit, formState: { errors } } = useForm();


  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";


  const onSubmit = (data) => {
    const {email, password,image,fullName} = data
  //  console.log(fullName);
  //creat user profile update
   createUser(email, password)
            .then(result => {
              updatUserProfile(fullName,image)
                .then(()=>{
                  if(result.user){
                    // console.log(result.user)
                    navigate(from);
                  }
                  

                })

                
            })
            .catch(error => {
                console.error(error)
            })
    

    
  }





  
  return (
    <div>
    <div className="h-[70px]"></div>
    <div>
      
    </div>
      <h2 className="text-3xl my-8 text-center">Please Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 mx-auto gap-3 mt-10 my-auto min-h-max text-center mb-5">
         
          
         <label className="input input-bordered flex items-center gap-2 mb-4">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
         <input type="text" className="grow" placeholder="fullName" 
         {...register("fullName", { required: true })}
         />
         
         </label>
         {errors.fullName && <span>This field is required</span>}

         
         <label className="input input-bordered flex items-center gap-2 mb-4">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
         <input type="text" className="grow" placeholder="Email" 
         {...register("email", { required: true })}
         />
         
         </label>
         {errors.email && <span>This field is required</span>}
        
         
        
         <label className="input input-bordered flex items-center gap-2 mb-4">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
         <input type="text" className="grow" placeholder="Image" 
         {...register("image")}
         />
         </label>


         <label className="input input-bordered flex items-center gap-2 mb-4">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
         <input type={showPassword ? "text": "password"} className="grow" 
         
         {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])/ })}
         />
          <span onClick={()=>setShowPassword(!showPassword)}><FaEye /></span>
         </label>
         
         
        
         {errors.password && errors.password.type === 'required' && <p>Password is required</p>}
         
         {errors.password && errors.password.type === 'minLength' && <p>{ toast.error('Password must be at least 6 characters long')}</p>}
         {errors.password && errors.password.type === 'pattern' && <p>{ toast.error('Password must contain at least one uppercase letter and one lowercase letter')}</p>}
         
         <button className="btn btn-outline btn-success"><MdAppRegistration  className="text-[red]"/> Register</button>




         
       </form>
      <div className="w-1/3 mx-auto text-center ">
      <Social></Social>
      </div>
     


<p className="w-1/3 mx-auto text-center mt-3 border-t-2 pt-5 mb-[20px]">You have account  <NavLink to="/login" className="text-[red]">Login</NavLink></p>
    </div>
  );
};

export default Registration;