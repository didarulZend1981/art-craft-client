import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Social from "../../components/Social/Social";
import { CiLogin } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UseAuthContext from "../../hooks/UseAuthContext";


const Login = () => {
  const {signInUser} = UseAuthContext();
   
  
  // console.log(logError);
  // console.log(logError);
  // toast.error(logError);
  //SetLogError
 
  

  const location = useLocation();
  const navigate = useNavigate();
  console.log('location in login',location);
  const handleLogin = e => {
    e.preventDefault();
    
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    
    //SetLogError
    
    // SetsuccessError('')
    //  console.log(email,password);
     signInUser(email, password)
     .then(result => {
        console.log("login tyme",result.user);
        
         // navigate after login
        //  toast.success("login okey");
       
        navigate(location?.state?location.state:'/');
        SetsuccessError('user created sucesfully');
     })
     .catch(error => {
        //  console.error(error);
        const msg ='your email and password should match with the registered email and password If it doesnt match';
            // console.log(error);
            // toast.error(msg);
            
     })
   


  }

  return (
    <div className="border-[2px]">
      <div className="h-[18px]"></div>
      <div className="bg-transparent w-1/3 mx-auto gap-3 py-[50px] mx-50px rounded-2xl">
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <form  onSubmit={handleLogin} className="  mt-20 my-auto min-h-max text-center mb-5">

         
          <label className="input input-bordered flex items-center gap-2 mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="Email" name="email" required
          
          />
          
          </label>
          
         
          <label className="input input-bordered flex items-center gap-2 mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input  className="grow" type="password" placeholder="Password" name="password" required
          
          
          />
         
          
          </label>
          
         


          <button className="btn btn-outline btn-success"><CiLogin className="text-[red]" /> Login</button>




          
      </form>
      
      <Social></Social>
      <ToastContainer />
      <p className="text-center">do not have account  <NavLink to="/registration" className="text-[red]">Register</NavLink></p>
      </div>
      
    </div>
    
  );
};

export default Login;