import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});

type Product = {
  _id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inventory: number;
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    if (!body.products || body.products.length === 0) {
      return new NextResponse("No Products In The Checkout", { status: 400 });
    }

    // Create line items for Stripe Checkout
    const lineItems = body.products.map((item: Product) => ({
      price_data: {
        currency: "pkr", // Change to your currency
        product_data: {
          name: item.name,
          images: [item.imageUrl],
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.inventory,
    }));

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`, // Redirect after successful payment
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`, // Redirect if payment is canceled
    });

    // Return the session URL to redirect the user
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log("Checkout error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};