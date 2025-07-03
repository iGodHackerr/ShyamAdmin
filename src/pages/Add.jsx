// import { useState } from "react";
// import { assets } from "../assets/assets";
// import axios from "axios";
// import { backendUrl } from "../App";
// import { toast } from "react-toastify";

// const Add = ({ token }) => {
//   const [image1, setImage1] = useState(false);
//   const [image2, setImage2] = useState(false);
//   const [image3, setImage3] = useState(false);
//   const [image4, setImage4] = useState(false);

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("Men");
//   const [subCategory, setSubCategory] = useState("Topwear");
//   const [bestseller, setBestseller] = useState(false);
//   const [sizes, setSizes] = useState([]);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();

//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("category", category);
//       formData.append("subCategory", subCategory);
//       formData.append("bestseller", bestseller);
//       formData.append("sizes", JSON.stringify(sizes));

//       image1 && formData.append("image1", image1);
//       image2 && formData.append("image2", image2);
//       image3 && formData.append("image3", image3);
//       image4 && formData.append("image4", image4);

//       const response = await axios.post(
//         backendUrl + "/api/product/add",
//         formData,
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         toast.success(response.data.message);
//         setName("");
//         setDescription("");
//         setImage1(false);
//         setImage2(false);
//         setImage3(false);
//         setImage4(false);
//         setPrice("");
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="flex flex-col w-full items-start gap-3"
//     >
//       <div>
//         <p className="mb-2 ">Upload Image</p>
//         <div className="flex gap-2">
//           <label htmlFor="image1">
//             <img
//               src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
//               className="w-20"
//               alt=""
//             />
//             <input
//               onChange={(e) => setImage1(e.target.files[0])}
//               type="file"
//               id="image1"
//               hidden
//             />
//           </label>

//           <label htmlFor="image2">
//             <img
//               src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
//               className="w-20"
//               alt=""
//             />
//             <input
//               onChange={(e) => setImage2(e.target.files[0])}
//               type="file"
//               id="image2"
//               hidden
//             />
//           </label>

//           <label htmlFor="image3">
//             <img
//               src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
//               className="w-20"
//               alt=""
//             />
//             <input
//               onChange={(e) => setImage3(e.target.files[0])}
//               type="file"
//               id="image3"
//               hidden
//             />
//           </label>

//           <label htmlFor="image4">
//             <img
//               src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
//               className="w-20"
//               alt=""
//             />
//             <input
//               onChange={(e) => setImage4(e.target.files[0])}
//               type="file"
//               id="image4"
//               hidden
//             />
//           </label>
//         </div>
//       </div>

//       <div className="w-full ">
//         <p className="mb-2">Product name</p>
//         <input
//           className="w-full max-w-[500px] px-3 py-2"
//           type="text"
//           placeholder="Type here"
//           required
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//         />
//       </div>

//       <div className="w-full ">
//         <p className="mb-2">Product description</p>
//         <textarea
//           className="w-full max-w-[500px] px-3 py-2"
//           type="text"
//           placeholder="Write content here"
//           required
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//         />
//       </div>

//       <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
//         <div>
//           <p className="mb-2">Product category</p>
//           <select
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full px-3 py-2"
//           >
            // <option value="Cotton Ruffle">Cotton Ruffle</option>
            // <option value="Cotton">Cotton</option>
            // <option value="Party Wear">Party Wear</option>
            // <option value="Party Wear">Heavy Mirror</option>
            // <option value="Party Wear">Flower</option>
            // <option value="Party Wear">Diamond</option>
            // <option value="Party Wear">Handwork Jacko Moti</option>
            // <option value="Party Wear">Ruffel Moti</option>
//           </select>
//         </div>

        

//         <div>
//           <p className="mb-2">Product Price</p>
//           <input
//             type="number"
//             className="w-full px-3 py-2 sm:w-[120px]"
//             placeholder="25"
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//           />
//         </div>
//       </div>

//       <div>
//         <p className="mb-2">Product Sizes</p>
//         <div className="flex gap-3">
//           <div
//             onClick={() =>
//               setSizes((p) =>
//                 p.includes("S") ? p.filter((item) => item !== "S") : [...p, "S"]
//               )
//             }
//           >
//             <p
//               className={`${
//                 sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"
//               } px-3 py-1 cursor-pointer `}
//             >
//               S
//             </p>
//           </div>

//           <div
//             onClick={() =>
//               setSizes((p) =>
//                 p.includes("M") ? p.filter((item) => item !== "M") : [...p, "M"]
//               )
//             }
//           >
//             <p
//               className={`${
//                 sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"
//               } px-3 py-1 cursor-pointer `}
//             >
//               M
//             </p>
//           </div>

//           <div
//             onClick={() =>
//               setSizes((p) =>
//                 p.includes("L") ? p.filter((item) => item !== "L") : [...p, "L"]
//               )
//             }
//           >
//             <p
//               className={`${
//                 sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"
//               } px-3 py-1 cursor-pointer `}
//             >
//               L
//             </p>
//           </div>

//           <div
//             onClick={() =>
//               setSizes((p) =>
//                 p.includes("XL")
//                   ? p.filter((item) => item !== "XL")
//                   : [...p, "XL"]
//               )
//             }
//           >
//             <p
//               className={`${
//                 sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"
//               } px-3 py-1 cursor-pointer `}
//             >
//               XL
//             </p>
//           </div>

//           <div
//             onClick={() =>
//               setSizes((p) =>
//                 p.includes("XXL")
//                   ? p.filter((item) => item !== "XXL")
//                   : [...p, "XXL"]
//               )
//             }
//           >
//             <p
//               className={`${
//                 sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"
//               } px-3 py-1 cursor-pointer `}
//             >
//               XXL
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex gap-2 mt-2">
//         <input
//           onChange={() => setBestseller((p) => !p)}
//           checked={bestseller}
//           type="checkbox"
//           id="bestseller"
//         />
//         <label className="cursor-pointer" htmlFor="bestseller">
//           Add to bestseller
//         </label>
//       </div>

//       <button
//         className="w-28 py-3 mt-4 bg-black bg-black text-white"
//         type="submit"
//       >
//         Add
//       </button>
//     </form>
//   );
// };

// export default Add;





// import { useState } from "react";
// import { assets } from "../assets/assets";
// import axios from "axios";
// import { backendUrl } from "../App";
// import { toast } from "react-toastify";

// const Add = ({ token }) => {
//   // Your original image state remains unchanged
//   const [image1, setImage1] = useState(false);
//   const [image2, setImage2] = useState(false);
//   const [image3, setImage3] = useState(false);
//   const [image4, setImage4] = useState(false);

//   // Your original product state
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("Men");
//   const [subCategory, setSubCategory] = useState("Topwear");
//   const [bestseller, setBestseller] = useState(false);

//   // --- NEW: State for dynamic sizes and prices ---
//   const [sizes, setSizes] = useState([{ size: "", price: "" }]);

//   // --- NEW: Handlers for dynamic inputs ---
//   const handleSizeChange = (index, event) => {
//     const values = [...sizes];
//     values[index][event.target.name] = event.target.value;
//     setSizes(values);
//   };

//   const handleAddSize = () => {
//     setSizes([...sizes, { size: "", price: "" }]);
//   };

//   const handleRemoveSize = (index) => {
//     if (sizes.length > 1) {
//       const values = [...sizes];
//       values.splice(index, 1);
//       setSizes(values);
//     }
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();

//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("category", category);
//       formData.append("subCategory", subCategory);
//       formData.append("bestseller", bestseller);
      
//       // --- NEW: Append the sizes array as a JSON string ---
//       formData.append("sizes", JSON.stringify(sizes));

//       image1 && formData.append("image1", image1);
//       image2 && formData.append("image2", image2);
//       image3 && formData.append("image3", image3);
//       image4 && formData.append("image4", image4);

//       const response = await axios.post(
//         `${backendUrl}/api/product/add`,
//         formData,
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         toast.success(response.data.message);
//         // Reset form
//         setName("");
//         setDescription("");
//         setImage1(false);
//         setImage2(false);
//         setImage3(false);
//         setImage4(false);
//         setSizes([{ size: "", price: "" }]); // Reset sizes
//         setBestseller(false);

//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="flex flex-col w-full items-start gap-4 p-4"
//     >
//       {/* Your original image upload section - no changes needed */}
//       <div>
//         <p className="mb-2">Upload Image</p>
//         <div className="flex gap-2">
//           <label htmlFor="image1"><img src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} className="w-20" alt=""/></label>
//           <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />

//           <label htmlFor="image2"><img src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} className="w-20" alt=""/></label>
//           <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />

//           <label htmlFor="image3"><img src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} className="w-20" alt=""/></label>
//           <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />

//           <label htmlFor="image4"><img src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} className="w-20" alt=""/></label>
//           <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
//         </div>
//       </div>

//       {/* Product Name & Description - no changes needed */}
//       <div className="w-full "><p className="mb-2">Product name</p><input className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type here" required onChange={(e) => setName(e.target.value)} value={name}/></div>
//       <div className="w-full "><p className="mb-2">Product description</p><textarea className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Write content here" required onChange={(e) => setDescription(e.target.value)} value={description}/></div>

//       {/* Category - no changes needed */}
//       <div className="flex-1 min-w-[200px]"><label className="font-semibold">Product Category</label><select onChange={(e) => setCategory(e.target.value)} value={category} className="w-full px-3 py-2 mt-1 border rounded-md"><option value="Cotton Ruffle">Cotton Ruffle</option>
//             <option value="Cotton">Cotton</option>
//             <option value="Party Wear">Party Wear</option>
//             <option value="Party Wear">Heavy Mirror</option>
//             <option value="Party Wear">Flower</option>
//             <option value="Party Wear">Diamond</option>
//             <option value="Party Wear">Handwork Jacko Moti</option>
//             <option value="Party Wear">Ruffel Moti</option></select></div>
      
//       {/* --- NEW: Dynamic Size and Price Inputs --- */}
//       <div className="w-full max-w-[500px]">
//         <label className="font-semibold">Sizes & Prices</label>
//         {sizes.map((sizeItem, index) => (
//           <div key={index} className="flex items-center gap-4 mb-2">
//             <input
//               type="text"
//               name="size"
//               placeholder="Size (e.g., 1)"
//               value={sizeItem.size}
//               onChange={(event) => handleSizeChange(index, event)}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//             <input
//               type="number"
//               name="price"
//               placeholder="Price (₹)"
//               value={sizeItem.price}
//               onChange={(event) => handleSizeChange(index, event)}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//             <button
//               type="button"
//               onClick={() => handleRemoveSize(index)}
//               className="px-3 py-1 font-bold text-white bg-red-500 rounded hover:bg-red-600"
//             >
//               -
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={handleAddSize}
//           className="w-full px-3 py-2 mt-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
//         >
//           Add More Sizes
//         </button>
//       </div>

//       {/* Bestseller - no changes needed */}
//       <div className="flex gap-2 mt-2"><input onChange={() => setBestseller((p) => !p)} checked={bestseller} type="checkbox" id="bestseller"/><label className="cursor-pointer" htmlFor="bestseller">Add to bestseller</label></div>

//       <button className="w-28 py-3 mt-4 text-white bg-black" type="submit">Add</button>
//     </form>
//   );
// };

// export default Add;




import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App"; // Correctly import from App.jsx
import { toast } from "react-toastify";

const Add = ({ token }) => { // Accept token as a prop
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Cotton Ruffle");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([{ size: "", price: "" }]);

  const handleSizeChange = (index, event) => {
    const values = [...sizes];
    values[index][event.target.name] = event.target.value;
    setSizes(values);
  };
  const handleAddSize = () => setSizes([...sizes, { size: "", price: "" }]);
  const handleRemoveSize = (index) => { if (sizes.length > 1) { const v = [...sizes]; v.splice(index, 1); setSizes(v); } };
  const handleImageUpload = (e) => { const f = Array.from(e.target.files); setImages(p => [...p, ...f.map(file => ({ file, preview: URL.createObjectURL(file) }))]); };
  const handleRemoveImage = (index) => setImages(p => p.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();
    productData.append("name", name);
    productData.append("description", description);
    productData.append("category", category);
    productData.append("subCategory", subCategory);
    productData.append("bestSeller", bestSeller);
    productData.append("sizes", JSON.stringify(sizes));
    images.forEach((img) => productData.append("images", img.file));

    try {
      // Pass the token in the request headers
      const response = await axios.post(`${backendUrl}/api/product/add`, productData, { headers: { token } });
      if (response.data.success) {
        toast.success("Product added!");
        // Reset form
        setName(""); setDescription(""); setImages([]); setCategory("Cotton Ruffle"); setSizes([{ size: "", price: "" }]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred.");
    }
  };

  return (
    <div className="w-full min-h-screen p-8 text-gray-700 bg-gray-100">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">Add New Product</h1>
            {/* Form fields remain the same... */}
            <div className="w-full">
                <label className="font-semibold">Product Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Product name" className="w-full px-3 py-2 mt-1 border rounded-md" required/>
            </div>
            <div className="w-full">
                <label className="font-semibold">Product Description</label>
                <textarea rows={4} onChange={(e)=>setDescription(e.target.value)} value={description} placeholder="Write content here" className="w-full px-3 py-2 mt-1 border rounded-md" required/>
            </div>
             <div className="w-full">
                <label className="font-semibold">Sizes & Prices</label>
                {sizes.map((sizeItem, index) => (
                <div key={index} className="flex items-center gap-4 mb-2">
                    <input type="text" name="size" placeholder="Size (e.g., 1)" value={sizeItem.size} onChange={(event) => handleSizeChange(index, event)} className="w-full px-3 py-2 border rounded-md" required />
                    <input type="number" name="price" placeholder="Price (₹)" value={sizeItem.price} onChange={(event) => handleSizeChange(index, event)} className="w-full px-3 py-2 border rounded-md" required />
                    <button type="button" onClick={() => handleRemoveSize(index)} className="px-3 py-1 font-bold text-white bg-red-500 rounded hover:bg-red-600">-</button>
                </div>
                ))}
                <button type="button" onClick={handleAddSize} className="w-full px-3 py-2 mt-2 font-bold text-white bg-green-500 rounded hover:bg-green-600">Add More Sizes</button>
            </div>
            <div className="flex flex-wrap gap-6">
                 <div className="flex-1 min-w-[200px]">
                    <label className="font-semibold">Product Category</label>
                    <select onChange={(e)=>setCategory(e.target.value)} value={category} className="w-full px-3 py-2 mt-1 border rounded-md">
                        <option value="Cotton Ruffle">Cotton Ruffle</option>
                        <option value="Cotton">Cotton</option>
                        <option value="Party Wear">Party Wear</option>
                        <option value="Heavy Mirror">Heavy Mirror</option>
                        <option value="Flower">Flower</option>
                        <option value="Diamond">Diamond</option>
                    </select>
                </div>
                <div className="flex-1 min-w-[200px]">
                     <label className="font-semibold">Product Sub-Category</label>
                    <select onChange={(e)=>setSubCategory(e.target.value)} value={subCategory} className="w-full px-3 py-2 mt-1 border rounded-md"><option value="Topwear">Topwear</option></select>
                </div>
                <div className="flex items-center self-end gap-2"><input type="checkbox" id="bestSeller" checked={bestSeller} onChange={(e)=>setBestSeller(e.target.checked)} /><label htmlFor="bestSeller" className="font-semibold">Mark as Best Seller</label></div>
            </div>
             <div>
                <label className="block mb-2 font-semibold">Upload Images</label>
                <input type="file" id="images" onChange={handleImageUpload} multiple required={images.length === 0} />
                <div className="flex flex-wrap gap-4 mt-4">{images.map((img, index) => (<div key={index} className="relative"><img src={img.preview} alt={`Preview ${index}`} className="object-cover w-24 h-24 rounded-md" /><button type="button" onClick={()=>handleRemoveImage(index)} className="absolute top-0 right-0 p-1 text-white bg-red-500 rounded-full">X</button></div>))}</div>
            </div>
            <button type="submit" className="w-full py-3 mt-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">ADD PRODUCT</button>
        </form>
    </div>
  );
};

export default Add;