// "use client"


// import Image from "next/image"
// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { StaticImageData } from "next/image"
// import pic from "../fixed-height (1).png"
// import pic2 from "../carousel-inner (2).png"
// import pic3 from "../unsplash_QANOF9iJlFs.png"
// import pic4 from "../product-cover-5 (1).png"
// import pic5 from "../filter (1).png"
// import pic6 from "../fixed-height (2).png"
// import pic7 from "../fixed-height (9).png"
// import pic8 from "../fixed-height (8).png"
// import pic9 from "../fixed-height (7).png"
// import pic10 from "../fixed-height (5).png"
// import pic11 from "../fixed-height (4).png"
// import pic12 from "../unsplash_vjMgqUkS8q8.png"
// import pic13 from "../fixed-height (3).png"
// import pic14 from "../filter (2).png"
// import pic15 from "../filter (3).png"
// import SanityFetch from "@/sanity/lib/fetch"
// import { allproducts } from "@/sanity/lib/queries"
// // type Products = {
// //     id: number
// //     name: string
// //     price: number
// //     image: StaticImageData
// //     slug: string

// // }
// // const products: Products[] = [
// //     {
// //         id: 0,
// //         name: "Jackets",
// //         price: 3000,
// //         image: pic,
// //         slug: "Product1"
// //     }, {
// //         id: 1,
// //         name: "T-shirts",
// //         price: 2000,
// //         image: pic6,
// //         slug: "Product2"
// //     }
// //     , {
// //         id: 2,
// //         name: "T-Shirts",
// //         price: 5000,
// //         image: pic8,
// //         slug: "Product3"
// //     }, {
// //         id: 3,
// //         name: "Hoodies",
// //         price: 3000,
// //         image: pic9,
// //         slug: "Product4"
// //     }, {
// //         id: 4,
// //         name: "Long coat",
// //         price: 6000,
// //         image: pic10,
// //         slug: "Product5"
// //     }, {
// //         id: 5,
// //         name: "Ladies coat",
// //         price: 7000,
// //         image: pic11,
// //         slug: "Product6"
// //     }, {
// //         id: 6,
// //         name: "Ladies Shirts",
// //         price: 5000,
// //         image: pic12,
// //         slug: "Product7"
// //     },
// //     {
// //         id: 7,
// //         name: "Shirts",
// //         price: 500,
// //         image: pic15,
// //         slug: "Product8"
// //     }
// //     ,
// //     {
// //         id: 8,
// //         name: "Ladies Pants",
// //         price: 600,
// //         image: pic13,
// //         slug: "Product9"
// //     }
// //     ,
// //     {
// //         id: 9,
// //         name: "Ladies Coat",
// //         price: 500,
// //         image: pic14,
// //         slug: "Product10"
// //     }
// //     ,
// //     {
// //         id: 10,
// //         name: "Ladies Sweater",
// //         price: 700,
// //         image: pic5,
// //          slug:"Product11"
// //     }
   
// // ]
// type Product={
//   id:number
//   name:string
//   description:string
//   price:number
// //   imageUrl:string
// }
// export default function List() {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [products, setProducts] = useState<Product[]>([]);
//     const [filteredItems, setFilteredItems] = useState<Product[]>([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//           try {
//             const response = await SanityFetch({ query: allproducts });
//             const productData: Product[] = response?.data || []; 
//             console.log(productData)
//             setProducts(productData);
            
//           } catch (error) {
//             console.error("Error fetching products:", error);
//           }
//         };
    
//         fetchProducts()}, [])

//         useEffect(() => {
//             setFilteredItems(
//               products.filter((prod) =>
//                 prod.name?.toLowerCase().includes(searchQuery.toLowerCase())
//               )
//             );
//           }, [searchQuery, products]);



//     return (
//         <div >
//             <div className="flex justify-center items-center align-center  mt-4 mb-2"><h2 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-12">
//                 Make Your Choice
//             </h2></div>
//             <div className="flex justify-center items-center align-center gap-4 ml-auto">

//                 <div className="flex mb-10 mt-4 max-w-xs w-full bg-gray-100 px-4 py-2 rounded outline outline-transparent border focus-within:border-blue-600 focus-within:bg-transparent transition-all">
//                     <input
//                         type="text"
//                         placeholder="Search something..."
//                         className="w-full text-sm bg-transparent rounded outline-none pr-2"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 192.904 192.904"
//                         width="16px"
//                         className="cursor-pointer fill-gray-400"
//                     >
//                         <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
//                     </svg>
//                 </div>

//             </div>

//             <div className="font-[sans-serif] ">
//                 <div className="p-4  text-center ">

//                     <div className="grid flex justify-center flex-col sm:flex-col items-center  grid -cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
//                         {filteredItems.length > 0 ? (
//                             filteredItems.map((prod) => (
//                                 <Link href={`/productlist/${prod.name}`}>
//                                     <div key={prod.id} className="flex justify-center items-center border w-60 h-80 shadow-md  flex-col p-2">
//                                         {/* <Image src={prod.imageUrl} alt="pic" className="w-full h-60" /> */}
//                                         <h1 >{prod.name}</h1>
//                                         <h3>{prod.price}</h3>
//                                         <p>{prod.description}</p>
//                                     </div></Link>
//                             ))
//                         ) : (
//                             <p>No products found</p>
//                         )}







//                     </div>
//                 </div>
//             </div>



//         </div>
//     )
// }

