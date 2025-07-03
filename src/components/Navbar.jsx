// import { assets } from "../assets/assets";

// const Navbar = ({ setToken }) => {
//   return (
//     <div className="flex items-center py-2 px-[4%] justify-between">
//       <img src={assets.logo} style={{ width: "max(10%, 80px)" }} alt="" />
//       <button
//         onClick={() => setToken("")}
//         className="bg-gray-600 text-white px-5 py-5 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Navbar;



import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken, setIsSidebarOpen }) => {

  const logout = () => {
    localStorage.removeItem("admin-token");
    setToken("");
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Hamburger Icon for Mobile */}
      <div className="block md:hidden">
        <button onClick={() => setIsSidebarOpen(prev => !prev)}>
           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <h1 className="text-xl font-bold text-gray-700">Admin Panel</h1>
      
      <div className="relative group">
        <img src={assets.profile_icon} alt="profile" className="w-8 cursor-pointer" />
        <div className="absolute right-0 z-10 hidden w-32 p-2 mt-2 text-gray-700 bg-white border rounded-md shadow-lg group-hover:block">
          <button onClick={logout} className="w-full px-3 py-2 text-left hover:bg-gray-100">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;