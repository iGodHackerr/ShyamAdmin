// import { NavLink } from "react-router-dom";
// import { assets } from "../assets/assets";

// const SideBar = () => {
//   return (
//     <div className="w-[18%] min-h-screen border-r-2">
//       <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
//         <NavLink
//           className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1"
//           to="/add"
//         >
//           <img className="w-5 h-5" src={assets.add_icon} alt="" />
//           <p className="hidden md:block">Add Items</p>
//         </NavLink>

//         <NavLink
//           className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1"
//           to="/list"
//         >
//           <img className="w-5 h-5" src={assets.order_icon} alt="" />
//           <p className="hidden md:block">List Items</p>
//         </NavLink>

//         <NavLink
//           className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1"
//           to="/order"
//         >
//           <img className="w-5 h-5" src={assets.order_icon} alt="" />
//           <p className="hidden md:block">Orders</p>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default SideBar;


// import React from "react";
// import { NavLink } from "react-router-dom";
// import { assets } from "../assets/assets";

// const SideBar = () => {
//   return (
//     <div className="w-full h-screen border-r-2 border-gray-300">
//       <div className="pt-12 pl-[15%] flex flex-col gap-5">
//         <NavLink
//           to="/add"
//           className="flex items-center gap-3 border border-gray-400 border-r-0 py-2 px-3 rounded-l-md cursor-pointer"
//         >
//           <img src={assets.add_icon} className="w-7" alt="" />
//           <p className="hidden sm:block">Add Items</p>
//         </NavLink>

//         <NavLink
//           to="/list"
//           className="flex items-center gap-3 border border-gray-400 border-r-0 py-2 px-3 rounded-l-md cursor-pointer"
//         >
//           <img src={assets.order_icon} className="w-7" alt="" />
//           <p className="hidden sm:block">List Items</p>
//         </NavLink>

//         {/* --- THIS IS THE FIX --- */}
//         <NavLink
//           to="/orders" // Changed from "/order" to "/orders"
//           className="flex items-center gap-3 border border-gray-400 border-r-0 py-2 px-3 rounded-l-md cursor-pointer"
//         >
//           <img src={assets.order_icon} className="w-7" alt="" />
//           <p className="hidden sm:block">Orders</p>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default SideBar;



import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const SideBar = () => {
  // Define base and active styles for NavLink
  const navLinkClass = "flex items-center gap-3 border border-transparent border-r-0 py-2 px-3 cursor-pointer";
  const activeLinkClass = "bg-blue-100 border-blue-500 text-blue-700 font-semibold";

  return (
    <div className="w-56 h-full bg-gray-100 border-r-2 border-gray-200">
      <div className="py-12 pl-4 pr-0 flex flex-col gap-5">
        <NavLink
          to="/add"
          className={({ isActive }) => `${navLinkClass} ${isActive ? activeLinkClass : ""}`}
        >
          <img src={assets.add_icon} className="w-7" alt="Add Items" />
          <p>Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) => `${navLinkClass} ${isActive ? activeLinkClass : ""}`}
        >
          <img src={assets.order_icon} className="w-7" alt="List Items" />
          <p>List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) => `${navLinkClass} ${isActive ? activeLinkClass : ""}`}
        >
          <img src={assets.order_icon} className="w-7" alt="Orders" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;