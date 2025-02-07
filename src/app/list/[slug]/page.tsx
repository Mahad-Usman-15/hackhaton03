// "use client";
// import Image from "next/image";
// import sanityFetch from "@/sanity/lib/fetch";
// import { allProuducts } from "@/sanity/lib/queries";
// import { useState, useEffect } from "react";
// import { addtoCArt } from "../../actions/cart";
// import Swal from "sweetalert2";

// type Product = {
//   _id: number;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// };

// export default function ProductDetail({ params }: { params: { slug: string } }) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("MD"); // Default selected size

//   const sizes = ["SM", "MD", "LG", "XL"];

//   // Fetch products on component mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts: Product[] = await sanityFetch({
//           query: allProuducts,
//         });
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Find the product based on the slug
//   const product = products.find((data) => data.name === params.slug);

//   // Handle quantity increase
//   const increaseQuantity = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   // Handle quantity decrease
//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity((prevQuantity) => prevQuantity - 1);
//     }
//   };

//   // Handle adding to cart
//   const handleAddToCart = () => {
//     if (product) {
//       addtoCArt({ ...product, inventory: quantity });
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: `${product.name} added to Cart`,
//         showConfirmButton: false,
//         timer: 1000,
//       });
//     }
//   };

//   if (!product) {
//     return <div>Loading...</div>; // Show a loading state while fetching the product
//   }

//   return (
//     <div className="font-sans tracking-wide max-md:mx-auto px-6 py-8">
//       <div className="md:min-h-[350px] grid items-start grid-cols-1 lg:grid-cols-5 md:grid-cols-2 border border-black">
//         {/* Product Image */}
//         <div className="lg:col-span-3 h-full p-6">
//           <div className="relative h-full flex items-center justify-center lg:min-h-[400px]">
//             <Image
//               src={product.imageUrl}
//               alt={product.name}
//               width={300}
//               height={400}
//               className="w-[300px] h-[400px] object-cover"
//             />
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="lg:col-span-2 bg-gray-100 py-6 px-8 h-full">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
//           </div>
//           <div className="mt-6">
//             <h3 className="text-xl font-bold text-gray-800">Price</h3>
//             <p className="text-gray-800 text-3xl font-bold mt-2">
//               Rs {product.price}
//             </p>
//           </div>

//           {/* Size Selection */}
//           <div className="mt-6">
//             <h3 className="text-lg font-bold text-gray-800">Choose sizes</h3>
//             <div className="flex flex-wrap gap-4 mt-4">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   type="button"
//                   onClick={() => setSelectedSize(size)}
//                   className={`w-10 h-9 border text-sm flex items-center justify-center shrink-0 transition-all duration-200 ${
//                     selectedSize === size
//                       ? "border-blue-600 outline outline-2 outline-blue-600"
//                       : "border-gray-300 hover:border-blue-600"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity Selection */}
//           <div className="mt-6">
//             <h3 className="text-lg font-bold text-gray-800">Quantity</h3>
//             <div className="flex divide-x border w-max mt-2 rounded overflow-hidden">
//               <button
//                 type="button"
//                 className="bg-gray-100 w-10 h-9 font-semibold flex items-center justify-center"
//                 onClick={decreaseQuantity}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-3 fill-current inline"
//                   viewBox="0 0 124 124"
//                 >
//                   <path
//                     d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
//                     data-original="#000000"
//                   />
//                 </svg>
//               </button>
//               <div className="w-10 h-9 font-semibold flex items-center justify-center text-gray-800 text-lg">
//                 {quantity}
//               </div>
//               <button
//                 type="button"
//                 className="bg-gray-800 text-white w-10 h-9 font-semibold flex items-center justify-center"
//                 onClick={increaseQuantity}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-3 fill-current inline"
//                   viewBox="0 0 42 42"
//                 >
//                   <path
//                     d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
//                     data-original="#000000"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-4 mt-6">
//             <button
//               type="button"
//               className="w-full max-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded"
//             >
//               Wishlist
//             </button>
//             <button
//               type="button"
//               className="w-full max-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
//               onClick={handleAddToCart}
//             >
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }