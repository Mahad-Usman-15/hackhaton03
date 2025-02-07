"use client";
import Image from "next/image";
import sanityFetch from "@/sanity/lib/fetch";
import { allProuducts } from "@/sanity/lib/queries";
import { useState, useEffect } from "react";
import Link from "next/link";
import { addtoCArt } from "../actions/cart";
import Swal from "sweetalert2";

type Product = {
  _id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default function Home() {
  const [IsSearchQuery, SetIsSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await sanityFetch({
          query: allProuducts,
        });
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredItems = products.filter((prod) =>
    prod.name.toLowerCase().includes(IsSearchQuery.toLowerCase())
  );

  const handleInput = (e: React.MouseEvent, product: Product|any) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.name} added to Cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addtoCArt(product);
  };

  return (
    <div className="flex justify-center items-center align-center flex-col">
      <div className="flex justify-center items-center align-center mt-4 mb-2">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-12">
          Make Your Choice
        </h2>
      </div>

      <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif] w-80">
        <input
          type="text"
          placeholder="Search Something..."
          className="w-full outline-none bg-transparent text-gray-600 text-sm"
          value={IsSearchQuery}
          onChange={(e) => SetIsSearchQuery(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="16px"
          className="fill-gray-600"
        >
          <path d="M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
      </div>

      <div className="flex justify-center items-center flex-col sm:flex-row flex-wrap gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((prod) => (
            <div
              key={prod._id}
              className="flex justify-center align-center  items-center flex-col w-60 h-80 shadow-md rounded transition-transform transform hover:-translate-y-2"
            >
              <Link href={`/product/${prod.name}`}>
                <Image src={prod.imageUrl} width={80} height={60} alt="pic" className="mr-6"/>
                <h1 className="font-extrabold">{prod.name}</h1>
                <h4 className="font-bold">Rs {prod.price}</h4>
              </Link>
              <button
                className="mt-2 bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                onClick={(e) => handleInput(e, prod)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No products Found.</p>
        )}
      </div>
    </div>
  );
}