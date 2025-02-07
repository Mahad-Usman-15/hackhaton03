// "use client"
// import Image from "next/image"
// import { useState } from "react"
// import Link from "next/link"
// import { StaticImageData } from "next/image"
// import pic from "../../fixed-height (1).png"
// import pic2 from "../../carousel-inner (2).png"
// import pic3 from "../../unsplash_QANOF9iJlFs.png"
// import pic4 from "../../product-cover-5 (1).png"
// import pic5 from "../../filter (1).png"
// import pic6 from "../../fixed-height (2).png"
// import pic7 from "../../fixed-height (9).png"
// import pic8 from "../../fixed-height (8).png"
// import pic9 from "../../fixed-height (7).png"
// import pic10 from "../../fixed-height (5).png"
// import pic11 from "../../fixed-height (4).png"
// import pic12 from "../../unsplash_vjMgqUkS8q8.png"
// import pic13 from "../../fixed-height (3).png"
// import pic14 from "../../filter (2).png"
// import pic15 from "../../filter (3).png"

// import { useCart } from "@/app/context/CartContext"


// export default function ProductDetail({params }:{params: {slug:string}}){
//     const product=products.find((data)=>data.slug===params.slug)

//     const [quantity,setQuantity]=useState(1)

//     const increaseQuantity=()=>{
//         setQuantity((prevQuantity)=>prevQuantity+1)
//     }
//     const decreaseQuantity=()=>{
//         if(quantity>1){
//             setQuantity((prevQuantity)=>prevQuantity-1)
//         }
    
//     }

//     const [selectedSize, setSelectedSize] = useState("MD"); // Default selected size

//     const sizes = ["SM", "MD", "LG", "XL"];





//     return(
//         <div className="font-sans tracking-wide max-md:mx-auto px-6 py-8 ">
//   <div className=" md:min-h-[350px] grid items-start grid-cols-1 lg:grid-cols-5 md:grid-cols-2 border border-black">
//     <div className="lg:col-span-3 h-full p-6">
//       <div className="relative h-full flex items-center justify-center lg:min-h-[400px]">
//         <Image src={product?.image} alt="pic" className="w-[300px] h-[400px]"/>
    
//       </div>
//     </div>
//     <div className="lg:col-span-2 bg-gray-100 py-6 px-8 h-full">
//       <div>
//         <h2 className="text-3xl font-bold text-gray-800">{product?.name}</h2>
       
//       </div>
//       <div className="mt-6">
//         <h3 className="text-xl font-bold text-gray-800">Price</h3>
//         <p className="text-gray-800 text-3xl font-bold mt-2">{product?.price}</p>
//       </div>
//     <div className="mt-6">
//       <h3 className="text-lg font-bold text-gray-800">Choose sizes</h3>
//       <div className="flex flex-wrap gap-4 mt-4">
//         {sizes.map((size) => (
//           <button
//             key={size}
//             type="button"
//             onClick={() => setSelectedSize(size)}
//             className={`w-10 h-9 border text-sm flex items-center justify-center shrink-0 transition-all duration-200 ${
//               selectedSize === size ? "border-blue-600 outline outline-2 outline-blue-600" : "border-gray-300 hover:border-blue-600"
//             }`}
//           >
//             {size}
//           </button>
//         ))}
//       </div>
//     </div>
//       <div className="mt-6">
//         <h3 className="text-lg font-bold text-gray-800">Quantity</h3>
//         <div className="flex divide-x border w-max mt-2 rounded overflow-hidden">
//           <button
//             type="button"
//             className="bg-gray-100 w-10 h-9 font-semibold flex items-center justify-center"
//             onClick={decreaseQuantity}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-3 fill-current inline"
//               viewBox="0 0 124 124"
//             >
//               <path
//                 d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
//                 data-original="#000000"
//               />
//             </svg>
//           </button>
//           <div className="w-10 h-9 font-semibold flex items-center justify-center text-gray-800 text-lg">
//             {quantity}
//           </div>
//           <button
//             type="button"
//             className="bg-gray-800 text-white w-10 h-9 font-semibold flex items-center justify-center"
//             onClick={increaseQuantity}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-3 fill-current inline"
//               viewBox="0 0 42 42"
//             >
//               <path
//                 d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
//                 data-original="#000000"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className="flex gap-4 mt-6">
//         <button
//           type="button"
//           className="w-full max-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded"
//         >
//         Wishlist
//         </button>
//         {/* <Link href="/cart">
//         <button
//           type="button"
//           className="w-full max-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
//           onClick={() => addToCart(product)}>
//           Add to cart
//         </button>
//         </Link> */}
//       </div>
     
//     </div>
//   </div>

// </div>

//     )
// }