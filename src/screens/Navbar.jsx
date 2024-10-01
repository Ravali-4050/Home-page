import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";  // Correct imports
import logo from "../assets/logo.webp";  // Ensure the correct path to your logo

function Navbar({children}) {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll direction to show/hide the navbar
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);  // Hides navbar when scrolling down
    } else {
      setShowNavbar(true);  // Shows navbar when scrolling up
    }

    setLastScrollY(currentScrollY);  // Update last scroll position
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);  // Only runs when `lastScrollY` changes

  console.log("Current route: ", location?.pathname);

  return (
    <div className="flex flex-col">
      {/* Navbar container */}
      <div
        className={`flex flex-row justify-between items-center px-8 shadow z-50 h-24 fixed w-full transition-transform bg-white duration-500 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div>
          <img src={logo} className="w-[100px]" alt="Logo" />
        </div>

        {/* Navbar links */}
        <div className="flex flex-row items-center gap-10 pr-10">
          <div className="flex flex-row items-center gap-8">
            <Link
              to="/Home"
              className={`text-lg hover:text-black ${
                location?.pathname === "/Home"
                  ? "text-[#FF6900]"
                  : "text-[#6e6e6e]"
              } font-semibold`}
            >
              Home
            </Link>
            <Link
              to="/Courses"
              className={`text-lg hover:text-black ${
                location?.pathname === "/Courses"
                  ? "text-[#FF6900]"
                  : "text-[#6e6e6e]"
              } font-semibold`}
            >
              Courses ⏷
            </Link>
            <Link
              to="/Itie"
              className={`text-lg hover:text-black ${
                location?.pathname === "/Itie"
                  ? "text-[#FF6900]"
                  : "text-[#6e6e6e]"
              } font-semibold`}
            >
              ITIE
            </Link>
            <Link
              to="/Entrepreneurship"
              className={`text-lg hover:text-black ${
                location?.pathname === "/Entrepreneurship"
                  ? "text-[#FF6900]"
                  : "text-[#6e6e6e]"
              } font-semibold`}
            >
              Entrepreneurship
            </Link>
            <Link
              to="/Pap"
              className={`text-lg hover:text-black ${
                location?.pathname === "/Pap"
                  ? "text-[#FF6900]"
                  : "text-[#6e6e6e]"
              } font-semibold`}
            >
              PAP
            </Link>
            <Link
              to="/Company"
              className={`text-lg hover:text-black ${
                location?.pathname === "/Company"
                  ? "text-[#FF6900]"
                  : "text-[#6e6e6e]"
              } font-semibold`}
            >
              Company ⏷
            </Link>
            <Link
              to="/Refer&Earn"
              className={`text-lg hover:text-black ${
                location?.pathname === "/Refer&Earn"
                  ? "text-[#FF6900]"
                  : "text-[#6e6e6e]"
              } font-semibold`}
            >
              Refer & Earn
            </Link>
          </div>

          {/* Login Button */}
          <button className="text-lg text-white hover:text-[#FF6900] cursor-pointer duration-500 font-semibold bg-gradient-to-t from-[#FF1200] to-[#FF7300] px-8 py-2 rounded">
            Login
          </button>
        </div>
      </div>

      {/* Rendering children (other content) */}
      {children}
    </div>
  );
}

export default Navbar;
