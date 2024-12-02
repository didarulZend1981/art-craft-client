import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      
      <h1 className="h-20">
      <NavBar></NavBar>
      </h1>
      <div className="min-h-[calc(100vh-800px)]"></div>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};


export default Root;