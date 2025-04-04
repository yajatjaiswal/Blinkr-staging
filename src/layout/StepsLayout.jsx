import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoanTracker from "../components/LoanTracker";
import character from "../assets/character.png";

const Layout = () => {
    return (
        <div className="bg-gradient-to-b from-purple-200 via-purple-300 to-purple-200 flex flex-col min-h-screen w-full relative">
            {/* Navbar */}
            <div className="relative z-50">
                <Navbar />
            </div>
            
            {/* Main Content */}
            <div className="flex-grow w-full relative">
                {/* Mobile Layout (Vertical) */}
                <div className="md:hidden flex flex-col items-center w-full">
                    {/* Character Image: Top */}
                    <div className="w-full flex justify-center mb-1">
                        <img 
                            src={character} 
                            alt="Character" 
                            className="w-24 sm:w-32"
                        />
                    </div>

                    {/* Main Content (Outlet) */}
                    <div className="w-full flex-grow relative">
                        <Outlet />
                    </div>

                    {/* Loan Tracker: Bottom */}
                    <div className="w-full flex justify-center mt-0 mb-6">
                        <LoanTracker />
                    </div>
                </div>

                {/* Desktop Layout (Horizontal) */}
                <div className="hidden md:flex w-full h-full">
                    {/* Character Image: Left */}
                    <div className="w-1/4 flex items-center justify-center">
                        <img 
                            src={character} 
                            alt="Character" 
                            className="w-48 lg:w-56 xl:w-64"
                        />
                    </div>

                    {/* Main Content (Outlet): Middle */}
                    <div className="w-2/4 flex items-center justify-center">
                        <Outlet />
                    </div>

                    {/* Loan Tracker: Right */}
                    <div className="w-1/4 flex items-center justify-end pr-0">
                        <LoanTracker />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
