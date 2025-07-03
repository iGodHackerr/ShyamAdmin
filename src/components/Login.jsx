// import { useState } from "react";
// import axios from "axios";
// import { backendUrl } from "../App";
// import { toast } from "react-toastify";

// const Login = ({ setToken }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmitHandler = async (e) => {
//     try {
//       e.preventDefault();

//       const response = await axios.post(backendUrl + "/api/user/admin", {
//         email,
//         password,
//       });

//       if (response.data.success) {
//         setToken(response.data.token);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       //   console.log(error);
//       //   toast.error(error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center w-full ">
//       <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
//         <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
//         <form onSubmit={onSubmitHandler}>
//           <div className="mb-3 mn-w-72">
//             <p className="text-sm font-medium text-gray-700 mb-2">
//               Email Address
//             </p>
//             <input
//               className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none "
//               type="email"
//               placeholder="your@email.com"
//               required
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//             />
//           </div>
//           <div className="mb-3 mn-w-72">
//             <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
//             <input
//               className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none "
//               type="password"
//               placeholder="Enter your password"
//               required
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//             />
//           </div>

//           <button
//             className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
//             type="submit"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = "https://shyam-backk.vercel.app"; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Corrected the URL from '/admin' to '/admin-login'
      const response = await axios.post(`${url}/api/user/admin-login`, { email, password });
      
      if (response.data.success) {
        toast.success("Login Successful!");
        setToken(response.data.token);
        localStorage.setItem("admin-token", response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred during login.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="mb-6 text-2xl font-bold text-center">Admin Login</h1>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;