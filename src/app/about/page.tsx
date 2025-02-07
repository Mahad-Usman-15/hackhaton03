import Image from "next/image"
import Link from "next/link"
import pic from "../desktop-header-24.png"
import pic1 from "../team-1-user-1.jpg"
import pic2 from "../unsplash_vjMgqUkS8q8.png"
import pic3 from "../technology 1 (1).png"
import pic4 from "../media bg-cover.png"
export default function About(){
    return(
        <div>


<div className="font-sans  px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
                    <div className="text-left">
                        <h2 className="text-blue-900 text-3xl font-bold mb-6">
                            About Bandage
                        </h2>
                        <p className="mb-4 text-sm text-blue-600">
                        Bandage is a trendy and stylish e-commerce clothing brand dedicated to providing high-quality fashion for men and women. Our collection features a perfect blend of modern aesthetics and timeless designs, ensuring that every outfit reflects confidence and individuality. With a focus on premium fabrics, trend-driven styles, and affordability, Bandage aims to make fashion accessible to everyone.

From everyday essentials to statement pieces, we offer a wide range of clothing that suits every occasion. Our user-friendly website ensures a seamless shopping experience with secure payments, fast delivery, and excellent customer service. Bandage is more than just a clothing store—it's a lifestyle choice for those who embrace fashion with elegance and ease.
                        </p>
                    
                    </div>
                    <div>
                        <img
                            src="https://readymadeui.com/management-img.webp"
                            alt="Placeholder Image"
                            className="rounded-lg object-contain w-full h-full"
                        />
                    </div>
                </div>
            </div>
            <div className=" p-8 min-h-[350px] flex items-center justify-center font-sans">
  <div className="bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-20 py-10">
    <div className="text-center">
      <h3 className="text-gray-800 text-4xl font-extrabold">
        15K
      </h3>
      <p className="text-gray-500 text-base font-semibold mt-3">Happy Customers</p>
    </div>
    <div className="text-center">
      <h3 className="text-gray-800 text-4xl font-extrabold">
        150K
      </h3>
      <p className="text-gray-500 text-base font-semibold mt-3">Revenue</p>
    </div>
    <div className="text-center">
      <h3 className="text-gray-800 text-4xl font-extrabold">
        15
      </h3>
      <p className="text-gray-500 text-base font-semibold mt-3">Engagement</p>
    </div>
    <div className="text-center">
      <h3 className="text-gray-800 text-4xl font-extrabold">
        100+
      </h3>
      <p className="text-gray-500 text-base font-semibold mt-3">
        Server Uptime
      </p>
    </div>
  </div>
</div>
            <div className="font-sans">
                <div className="px-8 py-12 text-center bg-blue-600  shadow-xl">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-blue-100 text-3xl font-bold mb-8">
                        Why Choose Bandage?
                        </h2>
                        <p className="text-blue-200 text-base mb-4">
                            <ul>  <li>Trusted for quality and innovation</li>
                       <li>Affordable pricing tailored to your needs</li>
                       <li>A customer-first approach</li></ul>
                     
                        </p>
                        <p className="text-blue-200 text-base">
                        Thank you for choosing Bandage. Together, we’re creating a smarter, more efficient way to shop for what matters most.
                        </p>
                       <Link href="./list">
                       <button
                            type="button"
                            className="inline-block mt-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-base tracking-wide rounded-md"
                        >
                            Shop Now
                        </button>
                       </Link> 
                    </div>
                </div>
            </div>














        </div>
    )
}