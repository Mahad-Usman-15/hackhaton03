"use client";
import { useEffect, useState } from "react";
import { getCartitems, removeCart, updateQuantity } from "../actions/cart";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inventory: number;
};

export default function CartPage() {
  const [CartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartitems());
  }, []);

  const handleremove = (id: number) => {
    Swal.fire({
      title: "Are You Sure?",
      showCancelButton: true,
      confirmButtonColor: "blue",
      cancelButtonColor: "red",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeCart(id);
        const updatedCart = getCartitems();
        setCartItems(updatedCart);
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return; // Ensure quantity is at least 1
    updateQuantity(id, quantity);
    setCartItems(getCartitems());
  };

  const calculatedTotal = () => {
    return CartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleCheckout = async () => {
    try {
      // Call the Stripe Checkout API
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: CartItems }), // Send cart items to the API
      });

      const data = await response.json();

      if (data.url) {
        // Redirect the user to the Stripe Checkout page
        window.location.href = data.url;
      } else {
        console.error("Checkout failed: No URL returned");
        Swal.fire("Error", "Checkout failed. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error during checkout", error);
      Swal.fire("Error", "An error occurred during checkout.", "error");
    }
  };

  return (
    <div>
      <h1 className="font-extrabold text-3xl text-center">Shopping Cart</h1>

      <div className="flex justify-center items-center flex-col sm:flex-row flex-wrap">
        {CartItems.length > 0 ? (
          <div className="flex justify-center items-center flex-col sm:flex-row flex-wrap">
            {CartItems.map((item) => (
              <div
                key={item._id}
                className="w-60 h-80 flex justify-center items-center flex-col shadow-lg bg-gray-200 m-4 p-4"
              >
                <Image src={item.imageUrl} alt="pic" width={100} height={100} />
                <h2 className="font-bold">{item.name}</h2>
                <p>Price: RS {item.price}</p>
                <div className="flex justify-center items-center flex-col gap-2">
                  <input
                    type="number"
                    value={item.inventory}
                    onChange={(e) => handleQuantity(item._id, parseInt(e.target.value))}
                    className="w-16 text-center border rounded"
                    min="1"
                  />
                  <button
                    onClick={() => handleremove(item._id)}
                    className="bg-blue-300 rounded w-20 h-8"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-center items-center flex-col mt-6 w-full">
              <h1 className="text-xl font-bold ml-4">Total: RS {calculatedTotal()}</h1>
              <button
                onClick={handleCheckout}
                className="bg-blue-500 flex justify-center items-center text-white w-60 h-12 p-2 rounded shadow-md hover:bg-blue-600 transition ml-4"
              >
                Proceed Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 mt-6">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}