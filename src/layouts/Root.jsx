import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
const Root = () => {
  return (
    <div>
      
      <h1 className="h-20">
      <NavBar></NavBar>
      </h1>
      <div className="min-h-[calc(100vh-800px)]"></div>
      <Outlet></Outlet>
      <footer className="footer items-center border-t-2 p-4 bg-[white] text-[black] bt-[1px]">
  <aside className="items-center grid-flow-col">
     
    <p className="text-[black]] flex"><img src="https://i.ibb.co/Z6XQ9m8/Newly.png"/><span className="mt-5 font-mono text-[15px]">Copyright © 2024 <br/> All right reserved</span></p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end ml-10">
    <a>
    <FaTwitter size={32}  />
    </a>
    <a><FaYoutube size={32} /></a>
    
    <a>
      <AiFillFacebook size={32} /> </a>
  </nav>
</footer>
    </div>
  );
};


export default Root;