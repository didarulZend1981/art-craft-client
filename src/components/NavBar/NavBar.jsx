import { NavLink } from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import UseAuthContext from "../../hooks/UseAuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NavBar = () => {
  const {logout,user,successError} = UseAuthContext();
  // console.log(user);
  // console.log(user);
 
  console.log('succ',successError);
  const links = <>
  
  
  <li className="m-[10px]">
    <NavLink className={({ isActive }) =>
              isActive ? 'text-red-500':'text-sky-700'
            } to="/" >Home</NavLink></li>
  <li className="m-[10px]">
    <NavLink className={({ isActive }) =>
              isActive ? 'text-red-500':'text-sky-700'
            } to="/allArtCraft" >All Art & craft Items</NavLink></li>
   <li className="m-[10px]">
    <NavLink className={({ isActive }) =>
              isActive ? 'text-red-500':'text-sky-700'
            } to="/addToCraft" >Add Craft Item</NavLink></li> 
    <li className="m-[10px]">
    <NavLink className={({ isActive }) =>
              isActive ? 'text-red-500':'text-sky-700'
            } to="/myCartList" >My Art & Craft List</NavLink>
    </li>  
   


{
  user?.email? "": 
  <>

    <li className="m-[10px]">
      <NavLink className={({ isActive }) =>
                isActive ? 'text-red-500':'text-sky-700'
              } to="/login" >Login</NavLink>
      </li> 
      <li className="m-[10px]">
      <NavLink className={({ isActive }) =>
                isActive ? 'text-red-500':'text-sky-700'
              } to="/registration" >Register</NavLink>
      </li> 

  </>
  


}
    

          
            
  </>




  return (
    <div>
        <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src="https://i.ibb.co/Z6XQ9m8/Newly.png" className="h-[50px] w-[120px]"/></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal  uppercase">
      {links}
    
     
      
     
    </ul>
  </div>
  <div className="navbar-end ">
    {

        user?.email? 
        
        <div className="dropdown dropdown-end mr-10">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="image not found" src={user?.photoURL || "image not found"} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            User Name:{user?.displayName ||"not found"}
            {/* <span className="badge">New</span> */}
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>E-mail:{user.email}</a></li>
        <li><a onClick={logout}>Logout</a></li>
        
      </ul>
  </div>
        
        
        
        :""

    }
 
 
    <div>
          <Toggle></Toggle>
    </div>
 
  </div>
</div>
<ToastContainer />
    </div>
  );
};

export default NavBar;