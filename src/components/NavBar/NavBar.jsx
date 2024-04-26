import { NavLink } from "react-router-dom";
import Toggle from "../Toggle/Toggle";

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

const NavBar = () => {
  
  

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
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal  uppercase">
      {links}
    
     
      
     
    </ul>
  </div>
  <div className="navbar-end ">
  <div className="dropdown dropdown-end mr-10">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
  </div>

    <div>
          <Toggle></Toggle>
    </div>
 
  </div>
</div>
    </div>
  );
};

export default NavBar;