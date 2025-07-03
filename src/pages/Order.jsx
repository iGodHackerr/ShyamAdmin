// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { backendUrl, currency } from "../App";
// import { assets } from "../assets/assets";

// const Order = ({ token }) => {
//   const [orders, setOrders] = useState([]);

//   const fetchAllOrders = async () => {
//     if (!token) {
//       return null;
//     }

//     try {
//       const res = await axios.post(
//         backendUrl + "/api/order/list",
//         {},
//         { headers: { token } }
//       );

//       if (res.data.success) {
//         setOrders(res.data.orders.reverse());
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   const statusHandler = async (e, orderId) => {
//     try {
//       const res = await axios.post(
//         backendUrl + "/api/order/status",
//         { orderId, status: e.target.value },
//         { headers: { token } }
//       );

//       if (res.data.success) {
//         await fetchAllOrders();
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchAllOrders();
//   }, [token]);

//   return (
//     <div>
//       <h3>Order Page</h3>
//       <div>
//         {orders.map((order, i) => (
//           <div
//             key={i}
//             className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
//           >
//             <img src={assets.parcel_icon} className="w-12" alt="" />
//             <div>
//               <div>
//                 {order.items.map((item, i) => {
//                   if (i === order.items.length - 1) {
//                     return (
//                       <p key={i} className="py-0.5">
//                         {item.name} x {item.quantity} <span>{item.size}</span>
//                       </p>
//                     );
//                   } else {
//                     return (
//                       <p key={i} className="py-0.5">
//                         {item.name} x {item.quantity} <span>{item.size}</span> ,
//                       </p>
//                     );
//                   }
//                 })}
//               </div>
//               <p className="mb-2 mt-3 font-medium">
//                 {order.address.firstName + " " + order.address.lastName}
//               </p>
//               <div>
//                 <p>{order.address.street + ","}</p>
//                 <p>
//                   {order.address.city +
//                     ", " +
//                     order.address.state +
//                     ", " +
//                     order.address.country +
//                     ", " +
//                     order.address.zipcode}
//                 </p>
//               </div>
//               <p>{order.address.phone}</p>
//             </div>
//             <div>
//               <p className="text-sm sm:text-[15px]">
//                 Items : {order.items.length}
//               </p>
//               <p className="mt-3">Method : {order.paymentMethod}</p>
//               <p>Payment : {order.payment ? "Done" : "Pending"}</p>
//               <p>Date : {new Date(order.date).toLocaleString()}</p>
//             </div>
//             <p className="text-sm sm:text-[15px]">
//               {currency} {order.amount}
//             </p>

//             <select
//               value={order.status}
//               className="p-2 font-semibold"
//               onChange={(e) => statusHandler(e, order._id)}
//             >
//               <option value="Order Placed">Order Placed</option>
//               <option value="Packing">Packing</option>
//               <option value="Shipped">Shipped</option>
//               <option value="Out for delivery">Out for delivery</option>
//               <option value="Delivered">Delivered</option>
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Order;


import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl, currency } from "../App";
import { assets } from "../assets/assets";
import Title from "../components/Title";

const Order = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const res = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );
      if (res.data.success) {
        setOrders(res.data.orders.reverse());
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occurred fetching orders.");
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: e.target.value },
        { headers: { token } }
      );
      if (res.data.success) {
        await fetchAllOrders();
        toast.success("Status Updated");
      }
    } catch (error) {
      toast.error("Failed to update status.");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-8">
      <Title text1={"All"} text2={"Orders"} />
      <div>
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order._id}
              className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 my-4 text-sm text-gray-700"
            >
              <img src={assets.parcel_icon} className="w-12" alt="parcel" />
              <div>
                {/* --- SAFETY CHECK FOR ITEMS --- */}
                {order.items && order.items.length > 0 ? (
                  <div>
                    {order.items.map((item, i) => (
                      <p key={i} className="py-0.5">
                        {item.name || "Item"} x {item.quantity || 1} <span>{item.size}</span>
                        {i === order.items.length - 1 ? "" : " ,"}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p>No items found.</p>
                )}

                {/* --- SAFETY CHECK FOR ADDRESS --- */}
                {order.address ? (
                  <>
                    <p className="mb-2 mt-3 font-medium">
                      {order.address.firstName} {order.address.lastName}
                    </p>
                    <div>
                      <p>{order.address.street},</p>
                      <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                    </div>
                    <p>{order.address.phone}</p>
                  </>
                ) : (
                  <p className="mt-3 font-medium text-red-500">Address not available</p>
                )}
              </div>
              <div>
                <p>Items: {order.items ? order.items.length : 0}</p>
                <p className="mt-3">Payment: {order.payment ? "Done" : "Pending"}</p>
                <p>Date: {new Date(order.date).toLocaleString()}</p>
              </div>
              <p>{currency} {order.amount}</p>
              <select
                value={order.status}
                className="p-2 font-semibold"
                onChange={(e) => statusHandler(e, order._id)}
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        ) : (
          <p>No orders to display.</p>
        )}
      </div>
    </div>
  );
};

export default Order;