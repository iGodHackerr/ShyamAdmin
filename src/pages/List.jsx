// import axios from "axios";
// import { useEffect, useState } from "react";
// import { backendUrl, currency } from "../App";
// import { toast } from "react-toastify";

// const List = ({ token }) => {
//   const [list, setList] = useState([]);

//   const fetchList = async () => {
//     try {
//       const response = await axios.get(backendUrl + "/api/product/list");
//       if (response.data.success) {
//         setList(response.data.products);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   const removeProduct = async (id) => {
//     try {
//       const response = await axios.post(
//         backendUrl + "/api/product/remove",
//         { id },
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         toast.success(response.data.message);
//         await fetchList();
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   return (
//     <>
//       <p className="mb-2">All Products Lists</p>
//       <div className="flex flex-col gap-2">
//         {/* LIST TABLE TITLE */}

//         <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm bg-gray-100">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b className="text-center">Action</b>
//         </div>

//         {/* PRODUCT LIST */}
//         {list.map((item, i) => (
//           <div
//             key={i}
//             className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
//           >
//             <img className="w-12 " src={item.image[0]} alt="" />
//             <p>{item.name}</p>
//             <p>{item.category}</p>
//             <p>
//               {currency}
//               {item.price}
//             </p>
//             <p
//               onClick={() => removeProduct(item._id)}
//               className="text-right md:text-center cursor-pointer text-lg"
//             >
//               X
//             </p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default List;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App"; // Import backendUrl

const List = ({ token }) => { // Accept token as a prop
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`, { headers: { token } });
      if (response.data.success) setList(response.data.data);
      else toast.error("Error fetching product list");
    } catch (error) { toast.error("An error occurred."); }
  };

  const removeProduct = async (productId) => {
    try {
      const response = await axios.post(`${backendUrl}/api/product/remove`, { id: productId }, { headers: { token } });
      if (response.data.success) {
        toast.success("Product removed.");
        await fetchList();
      } else toast.error("Error removing product.");
    } catch (error) { toast.error("An error occurred."); }
  };

  useEffect(() => { if (token) fetchList(); }, [token]);

  return (
    <div className="w-full min-h-screen p-8 text-gray-700 bg-gray-100">
      <h1 className="mb-6 text-2xl font-bold">All Products List</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr><th scope="col" className="px-6 py-3">Image</th><th scope="col" className="px-6 py-3">Name</th><th scope="col" className="px-6 py-3">Category</th><th scope="col" className="px-6 py-3">Price</th><th scope="col" className="px-6 py-3">Action</th></tr>
          </thead>
          <tbody>
            {list.map((item) => {
              const price = item.sizes && item.sizes.length > 0 ? item.sizes[0].price : "N/A";
              return (
                <tr key={item._id} className="bg-white border-b">
                  <td className="px-6 py-4"><img src={item.image[0]} alt={item.name} className="object-cover w-16 h-16 rounded-md" /></td>
                  <td className="px-6 py-4">{item.name}</td><td className="px-6 py-4">{item.category}</td><td className="px-6 py-4">₹{price}</td>
                  <td className="px-6 py-4"><button onClick={() => removeProduct(item._id)} className="px-3 py-1 font-bold text-white bg-red-500 rounded-md">X</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {list.length === 0 && <p className="p-4 text-center">No products to display.</p>}
      </div>
    </div>
  );
};
export default List;