"use client"
import React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import pic from "../container.jpg"
import pic2 from "../desktop-shop-cards-18.jpg"
import pic3 from "../filter-row.png"
import pic4 from "../desktop-clients-1.jpg"
import pic5 from "../desktop-footer-6.png"
import pic6 from "../shop-hero-1-product-slide-1.jpg"
import pic7 from "../carousel-inner (1).png"
import pic8 from "../container-fluid.png"
import pic9 from "../product-cover-5.png"
import pic10 from "../fixed-height (2).png"
import pic11 from "../fixed-height (3).png"
import pic12 from "../fixed-height (4).png"
import pic13 from "../fixed-height (5).png"
import pic14 from "../fixed-height (6).png"
import pic15 from "../fixed-height (7).png"
import pic16 from "../fixed-height (8).png"
import pic17 from "../fixed-height (9).png"
import pic18 from "../fixed-height (10).png"
import pic19 from "../unsplash_dEGu-oCuB1Y.png"
import media from "../container (1).png"
import pic20 from '../col-md-6.png'
import pic21 from "../col-md-6 (1).png"
import { useEffect } from "react"
import { allProuducts } from "@/sanity/lib/queries"
import sanityFetch from "@/sanity/lib/fetch"
type Product = {
  _id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default function Body() {
//  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div>

      <div className="Parent font-[sans-serif]">
        <div className="relative overflow-hidden">
          <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
            <div className="relative z-10 text-center lg:text-left">
              <h1 className="text1 md:ml-60">
                Summer 2020
                <br />
                <span className="text-white   text-4xl ">New Collection</span>
              </h1>
              <p className="max-w-md mx-auto text-lg text-gray-300 sm:text-xl mt-4 md:mt-1 md:max-w-3xl ">
                We know that large objects will act but things on a small scale
              </p>
              <div className="mt-3 md:ml-60 flex max-sm:flex-col sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow ">
                  <Link href="./product"><button className=" hover:bg-green-300 w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md   transition duration-150 ease-in-out button">
                    Shop Now
                  </button></Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* <Image src={media} className="img1" height={770} width={1000} alt="aa"></Image> */}
      <div className="mt-2">
  <div className="flex justify-center items-center flex-col text-center sm:text-left">
    <h1 className="text-2xl font-bold">EDITOR'S PICK</h1>
    <p className="text-gray-400">Problems trying to resolve conflict between</p>
  </div>

 <Link href="./list">
 <div className="flex flex-wrap justify-center  items-center gap-4 mt-6">
    <div className="w-full sm:w-auto div1">
      <button className="bg-white w-20 h-10 sm:w-32 mt-2 sm:mt-0 mx-2 sm:ml-4 p-2 text-sm sm:text-base rounded">Men</button>
    </div>
    <div className="w-full sm:w-auto div2">
      <button className="bg-white w-20 h-10 sm:w-32 mt-2 sm:mt-0 mx-2 sm:ml-4 p-2 text-sm sm:text-base rounded">Women</button>
    </div>
    <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-auto">
      <div className="w-full sm:w-auto div3">
        <button className="bg-white w-24 h-10 sm:w-32 mt-2 sm:mt-0 mx-2 sm:ml-4 p-2 text-sm sm:text-base rounded">Accessories</button>
      </div>
      <div className="w-full sm:w-auto div4">
        <button className="bg-white w-20 h-10 sm:w-32 mt-2 sm:mt-0 mx-2 sm:ml-4 p-2 text-sm sm:text-base rounded">Kids</button>
      </div>
    </div>
  </div>
 </Link> 
</div>






      <div className="main font-[sans-serif] ">
        <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold">Featured products</h3>
            <h2 className="text-4xl mt-2  font-extrabold text-gray-800 ">
              Best Seller Products
            </h2>
            <p className="text-xl  mt-2 mb-2">problems trying to resolve the conflict between</p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">


              </div>
              {/* <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <Image
                  src={pic9}
                  alt="Product 1"
                  className="h-full w-full object-contain"


                />
              </div> */}
              {/* <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-800">Graphic design</h3>
                <h4 className="text-lg text-gray-800 font-bold mt-2">English Department</h4>
                <p className="text-gray-600 text-sm mt-2">$16.48</p>
                <div className="flex space-x-2 mt-4">
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23A6F0] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-orange-400 border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                  </div>


                </div>
              </div> */}
            </div>
            {/* <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">


              </div>
              <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <Image
                  src={pic10}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-800">Graphic design</h3>
                <h4 className="text-lg text-gray-800 font-bold mt-2">English Department</h4>
                <p className="text-gray-600 text-sm mt-2">$16.48</p>
                <div className="flex space-x-2 mt-4">
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23A6F0] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-orange-400 border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                  </div>


                </div>
              </div>
            </div> */}

            {/* <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">


              </div>
              <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <Image
                  src={pic11}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-800">Graphic design</h3>
                <h4 className="text-lg text-gray-800 font-bold mt-2">English Department</h4>
                <p className="text-gray-600 text-sm mt-2">$16.48</p>
                <div className="flex space-x-2 mt-4">
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23A6F0] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-orange-400 border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                  </div>


                </div>
              </div>
            </div> */}
            {/* <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">


              </div>
              <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <Image
                  src={pic12}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-800">Graphic design</h3>
                <h4 className="text-lg text-gray-800 font-bold mt-2">English Department</h4>
                <p className="text-gray-600 text-sm mt-2">$16.48</p>
                <div className="flex space-x-2 mt-4">
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23A6F0] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-orange-400 border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                  </div>


                </div>
              </div>
            </div> */}
            {/* <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">


              </div>
              <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <Image
                  src={pic13}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-800">Graphic design</h3>
                <h4 className="text-lg text-gray-800 font-bold mt-2">English Department</h4>
                <p className="text-gray-600 text-sm mt-2">$16.48</p>
                <div className="flex space-x-2 mt-4">
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23A6F0] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-orange-400 border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                  </div>


                </div>
              </div>
            </div> */}
            {/* <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">


              </div>
              <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <Image
                  src={pic14}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-800">Graphic design</h3>
                <h4 className="text-lg text-gray-800 font-bold mt-2">English Department</h4>
                <p className="text-gray-600 text-sm mt-2">$16.48</p>
                <div className="flex space-x-2 mt-4">
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23A6F0] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-orange-400 border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                  </div>


                </div>
              </div>
            </div> */}
            {/* <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">


              </div>
              <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <Image
                  src={pic15}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-800">Graphic design</h3>
                <h4 className="text-lg text-gray-800 font-bold mt-2">English Department</h4>
                <p className="text-gray-600 text-sm mt-2">$16.48</p>
                <div className="flex space-x-2 mt-4">
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23A6F0] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-orange-400 border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                  </div>


                </div>
              </div>
            </div> */}
            {/* <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
              <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">


              </div>
              <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <Image
                  src={pic16}
                  alt="Product 1"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-800">Graphic design</h3>
                <h4 className="text-lg text-gray-800 font-bold mt-2">English Department</h4>
                <p className="text-gray-600 text-sm mt-2">$16.48</p>
                <div className="flex space-x-2 mt-4">
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23A6F0] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-orange-400 border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                    <button
                      type="button"
                      className="w-10 h-10 bg-[#23856D] border border-white hover:border-gray-800 rounded-md shrink-0"
                    />
                  </div>


                </div>
              </div>
            </div> */}
          </div>

          {/* <Image className="img" src={pic7} alt="Image 7" layout="responsive" width={1440} height={850}/> */}
          <div className="flex flex-col lg:flex-row justify-between items-center bg-green-600 text-white p-4">
            {/* Left Section */}
            <div className="flex flex-col justify-center items-center lg:items-start lg:ml-20">
              <h2 className="text-xl p-4">Summer 2020</h2>
              <h1 className="text-4xl text-white font-bold text-center lg:text-left">
                Vita Classic <br /> Product
              </h1>
              <p className="text-sm px-2 py-4 text-center lg:text-left lg:ml-0">
                We know how large objects will act.
              </p>
              <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-60 p-2 gap-4">
                <h1>Rs 2000</h1>
                <button className="bg-green-400 rounded w-full lg:w-40 h-10 hover:bg-green-300 text-white p-2">
                  View More
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="mt-4 lg:mt-0 lg:ml-8 w-full lg:w-auto">
              <Image src={pic20} alt="hef" layout="responsive" className="rounded-md" />
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center flex-col sm:flex-row px-4 py-6">
            {/* Image Section */}
            <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-center mb-6 sm:mb-0">
              <Image src={pic21} alt="HREF" className="w-full max-w-xs sm:max-w-md lg:max-w-lg" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 lg:w-2/3">
              {/* Title Section */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-6">
                <h2 className="text-xl font-semibold text-gray-300 mb-2">Summer 2020</h2>
                <h1 className="text-3xl font-bold mb-4">Part Of The Neural Universe</h1>
                <p className="text-sm text-gray-400">
                  We know how large objects will act. <br />
                  But things on a small scale...
                </p>
              </div>

              {/* Button Section */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 w-full">
                <Link href="./list">
                <button className="bg-green-400 hover:bg-green-300 text-white rounded px-6 py-2 w-auto sm:w-40">
                  View More                </button></Link>
                <Link href="./about">
                <button className="bg-white border border-green-400 text-green-400 hover:bg-green-300 hover:text-white rounded px-6 py-2 w-auto sm:w-40">
                  Read More
                </button></Link>
              </div>
            </div>
          </div>




  

        </div>

      </div>


    </div>


  )
}
