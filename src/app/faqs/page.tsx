"use client"

import { useState } from "react"
const faqs = [
  {
    id: 1,
    question: "How do I place an order?",
    answer: "Simply browse our products, add items to your cart, and proceed to checkout. Follow the instructions to complete your purchase.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, PayPal, Apple Pay, Google Pay, and bank transfers.",
  },
  {
    id: 3,
    question: "Can I modify my order after placing it?",
    answer: "Once an order is placed, modifications are not guaranteed. Contact our support team immediately for assistance.",
  },
  {
    id: 4,
    question: "How do I track my order?",
    answer: "After placing an order, you’ll receive a tracking number via email. You can track your order on our website.",
  },
  {
    id: 5,
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy. Items must be unused and in their original packaging. Visit our Returns page for details.",
  },
  {
    id: 6,
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide! Shipping rates and times vary by location. Check our Shipping page for more details.",
  },
  {
    id: 7,
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-10 business days. Express shipping options are available at checkout.",
  },
  {
    id: 8,
    question: "Can I cancel my order?",
    answer: "Orders can be canceled within 12 hours of placing them. After that, they are processed for shipping.",
  },
  {
    id: 9,
    question: "What should I do if I receive a damaged item?",
    answer: "Contact our support team within 7 days with photos of the damaged product, and we’ll arrange a replacement or refund.",
  },
  {
    id: 10,
    question: "Do you have a loyalty program?",
    answer: "Yes! Join our loyalty program to earn points on every purchase and redeem them for discounts.",
  },
  {
    id: 11,
    question: "Can I apply multiple discount codes?",
    answer: "Only one discount code can be applied per order unless stated otherwise.",
  },
  {
    id: 12,
    question: "How do I contact customer support?",
    answer: "You can reach us via live chat, email, or our support hotline listed on our Contact page.",
  },
  {
    id: 13,
    question: "Do you offer gift cards?",
    answer: "Yes, we offer digital and physical gift cards that can be used on any purchase.",
  },
  {
    id: 14,
    question: "Is there a warranty on products?",
    answer: "Many of our products come with manufacturer warranties. Check individual product pages for details.",
  },
  {
    id: 15,
    question: "How do I change my shipping address?",
    answer: "Log in to your account and update your shipping details before placing an order.",
  },
  {
    id: 16,
    question: "What if my order is delayed?",
    answer: "If your order is delayed, check the tracking status or contact our support team for assistance.",
  },
  {
    id: 17,
    question: "Do you provide invoices for business purchases?",
    answer: "Yes, invoices are automatically generated and can be downloaded from your account dashboard.",
  },
  {
    id: 18,
    question: "What happens if my package gets lost?",
    answer: "If your package is lost, contact us as soon as possible. We will investigate with the shipping carrier and issue a replacement if necessary.",
  },
  {
    id: 19,
    question: "How can I leave a review for a product?",
    answer: "After receiving your order, you’ll receive an email with a link to leave a review on our website.",
  },
  {
    id: 20,
    question: "Do you offer same-day delivery?",
    answer: "Same-day delivery is available in select cities. Check our delivery options at checkout.",
  },
  {
    id: 21,
    question: "Are all products in stock?",
    answer: "Product availability is updated in real-time. If an item is out of stock, you can sign up for restock notifications.",
  },
  {
    id: 22,
    question: "Do you ship to P.O. boxes?",
    answer: "Some carriers do not deliver to P.O. boxes. Check our shipping policy for details.",
  },
  {
    id: 23,
    question: "Can I exchange an item?",
    answer: "Yes, exchanges are available within 30 days for unused products in original packaging.",
  },
  {
    id: 24,
    question: "What if I entered the wrong shipping address?",
    answer: "Contact us immediately. If the order has not been shipped, we can update your details.",
  },
  {
    id: 25,
    question: "Do you have a physical store?",
    answer: "We are an online-only store, but we may have pop-up locations. Follow us for updates!",
  },
  {
    id: 26,
    question: "Are there any hidden fees?",
    answer: "No hidden fees! The price you see at checkout is the final price, including taxes and shipping.",
  },
  {
    id: 27,
    question: "Do you restock sold-out items?",
    answer: "Some items are restocked based on demand. You can sign up for restock alerts on the product page.",
  },
  {
    id: 28,
    question: "Can I change the currency on your website?",
    answer: "Yes, you can change the currency in the settings at the top of the page.",
  },
  {
    id: 29,
    question: "Do you offer wholesale pricing?",
    answer: "Yes, wholesale pricing is available for bulk orders. Contact our sales team for more details.",
  },
  {
    id: 30,
    question: "Is my personal information secure?",
    answer: "Yes, we use advanced encryption and security protocols to keep your data safe.",
  }
];



export default function Pricing() {
  const [IsSearchQuery, SetIsSearchQuery] = useState("");

  const filteredItems = faqs.filter((item) =>
    item.question.toLowerCase().includes(IsSearchQuery.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="font-sans flex justify-center items-center flex-col">
        <div className="max-w-6xl mx-auto font-sans">
          {/* Title */}
          <div className="flex justify-center items-center flex-col">
            <h2 className="lg:text-4xl text-3xl font-bold text-gray-700">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600 mt-6">
              Find answers to common questions about shopping, payments, orders,
              and more.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex mt-4 w-80 rounded-md border-2 border-blue-500 overflow-hidden mx-auto font-[sans-serif]">
            <input
              type="text"
              placeholder="Search Something..."
              className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
              value={IsSearchQuery}
              onChange={(e) => SetIsSearchQuery(e.target.value)}
            />
            <button type="button" className="flex items-center justify-center bg-[#007bff] px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="fill-white"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </button>
          </div>

          {/* FAQs List */}
          <div className="flex justify-center  items-start flex-wrap flex-col mt-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((faq) => (
                <div key={faq.id} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-700">{faq.question}</h3>
                  <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No results found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
