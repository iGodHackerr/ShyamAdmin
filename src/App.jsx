// import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Navbar from "./components/Navbar";
// import SideBar from "./components/SideBar";
// import Login from "./components/Login";
// import Add from "./pages/Add";
// import List from "./pages/List";
// import Order from "./pages/Order";

// export const backendUrl = "https://shyam-backk.vercel.app";
// export const currency = "₹";

// const App = () => {
//   const [token, setToken] = useState(localStorage.getItem("admin-token"));
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

//   if (!token) {
//     return <Login setToken={setToken} />;
//   }

//   return (
//     <div className="relative flex w-full min-h-screen">
//       <ToastContainer />
      
//       {/* Sidebar for Desktop */}
//       <div className="hidden md:block">
//         <SideBar />
//       </div>

//       {/* Mobile Sidebar (Drawer) */}
//       <div className={`fixed top-0 left-0 h-full z-30 transform transition-transform duration-300 ease-in-out md:hidden ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
//         <SideBar />
//       </div>

//       <div className="flex-1">
//         <Navbar setToken={setToken} setIsSidebarOpen={setIsSidebarOpen} />
//         <div className="p-4">
//           <Routes>
//             <Route path="/" element={<Navigate to="/add" />} />
//             <Route path="/add" element={<Add token={token} />} />
//             <Route path="/list" element={<List token={token} />} />
//             <Route path="/orders" element={<Order token={token} />} />
//           </Routes>
//         </div>
//       </div>

//       {/* Overlay for mobile */}
//       {isSidebarOpen && (
//         <div className="fixed inset-0 z-20 bg-black opacity-50 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
//       )}
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Login from "./components/Login";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";

export const backendUrl = "http://localhost:4000";
export const currency = "₹";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("admin-token"));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile menu

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="w-full">
      <ToastContainer />
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <hr />
      <div className="flex">
        {/* Static Sidebar for Desktop */}
        <div className="hidden md:block w-[18%] min-h-screen">
            <SideBar />
        </div>

        {/* --- MOBILE MENU DRAWER --- */}
        <div className={`fixed top-0 left-0 h-full bg-white z-30 transform transition-transform duration-300 ease-in-out md:hidden ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <SideBar />
        </div>
         {/* Overlay for when mobile menu is open */}
        {isSidebarOpen && (
            <div className="fixed inset-0 z-20 bg-black opacity-50 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
        )}

        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/add" />} />
            <Route path="/add" element={<Add token={token} />} />
            <Route path="/list" element={<List token={token} />} />
            <Route path="/orders" element={<Order token={token} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;