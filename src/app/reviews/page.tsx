"use client"
import { useState } from "react";
import pic from "../pic.webp";
import Image from "next/image";

export default function Ratings() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [feedbacks, setFeedbacks] = useState<{ name: string, review: string }[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name && review) {
      setFeedbacks([
        ...feedbacks,
        { name: name, review: review },
      ]);
      setName('');
      setReview('');
    }
  };

  return (
    <div className="mx-auto p-6 font-[sans-serif] rounded-md">
      <h1 className="text-center text-2xl sm:text-3xl mb-10">Ratings With Reviews</h1>
      <div className="grid sm:grid-cols-3 items-center gap-4">
        <div className="flex flex-col items-center justify-center max-sm:mb-2">
          <h3 className="font-extrabold text-4xl">3.0</h3>
          <div className="mt-4 text-center">
            <div className="flex items-center gap-1">
              {/* Star ratings here */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-3 shrink-0 ${index < 3 ? 'fill-[#facc15]' : 'fill-[#CED5D8]'}`}
                  viewBox="0 0 14 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
            </div>
            <p className="mt-1.5 text-gray-500 text-xs">5,456,852</p>
          </div>
        </div>
        <div className="space-y-1 sm:col-span-2">
          {/* Rating distribution bars */}
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <p className="text-sm text-gray-500 font-bold">{rating}.0</p>
              <div className="bg-gray-300 rounded w-full h-3 ml-3">
                <div className={`w-${(rating * 20)}% h-full rounded bg-[#facc15]`} />
              </div>
              <p className="text-sm font-bold ml-3">{(rating * 10)}%</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="border my-6" />

      <div>
        <h3 className="font-bold text-base">All Reviews ({feedbacks.length})</h3>
        <div className="mt-6 space-y-4">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="flex items-start">
              <Image
                src={pic}
                alt="profile pic"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div className="ml-3">
                <h4 className="text-gray-800 text-sm font-bold">{feedback.name}</h4>
                <div className="flex space-x-1 mt-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-3 fill-[#facc15]`}
                      viewBox="0 0 14 13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500 text-xs !ml-2 font-semibold">Just now</p>
                <p className="text-xs text-gray-500 mt-3">{feedback.review}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 border border-gray-200">
          <form className="flex-col flex justify-center items-center" onSubmit={handleSubmit}>
            <legend className="text-2xl font-bold text-center mb-4">Give your Feedback</legend>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-400 w-80 h-10 rounded-md mb-2 shadow shadow-black"
            />
            <textarea
              name="review"
              rows={3}
              placeholder="Enter Your Reviews"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="border border-gray-400 w-80 h-40 rounded-md shadow shadow-black"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white w-80 h-10 rounded-md mt-3"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
