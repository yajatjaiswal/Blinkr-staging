import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoanTracker from "../components/LoanTracker";

const Layout = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen w-full relative">

      <div className="flex-grow w-full relative">
        <Outlet />
      </div>
        
      <Footer />
    </div>
  );
};

export default Layout;
