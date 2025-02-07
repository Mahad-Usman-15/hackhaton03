import pic from "../fixed-height (1).png"
import Image, { StaticImageData } from "next/image"
import pic2 from "../card-item.png"
import pic3 from "../col-md-4.png"
import Link from "next/link"

type Products = {
  prouct_name: string,
  product_detail: string,
  price: number,
  imgae: StaticImageData
}
export default function Product() {
  const myproducts: Products[] = [
    {
      prouct_name: "Tshirt",
      product_detail: "",
      price: 120,
      imgae: pic
    },
    {
      prouct_name: "Pants",
      product_detail: "",
      price: 110,
      imgae: pic
    },
    {
      prouct_name: "Jeans",
      product_detail: "",
      price: 125
      ,
      imgae: pic
    },
    {
      prouct_name: "Hats",
      product_detail: "",
      price: 122,
      imgae: pic
    },

  ]

  return (
    <div>
    


      <div className="grid grid-cols-1 mt-6 flex flex-col sm:flex-row justify-center items-center align-center ml-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-2">
        
        <div className="bg-white overflow-hidden cursor-pointer relative group ">
          <div className="w-[200px] h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <Link href="./list">
              <Image
                src={pic2}
                alt="product1"
                className="h-full w-full object-contain transform transition-transform duration-300 group-hover:scale-110"
              /></Link>
          </div>


        </div>
        <div className="bg-white overflow-hidden cursor-pointer relative group">
          <div className="w-[200px] h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <Link href="./list">  <Image
              src={pic3}
              alt="product1"
              className="h-full w-full object-contain transform transition-transform duration-300 group-hover:scale-110"
            /></Link>
          </div>


        </div>
        <div className="bg-white overflow-hidden cursor-pointer relative group">
          <div className="w-[200px] h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <Link href="./list">      <Image
              src={pic2}
              alt="product1"
              className="h-full w-full object-contain transform transition-transform duration-300 group-hover:scale-110"
            /></Link>
          </div>


        </div>
        <div className="bg-white overflow-hidden cursor-pointer relative group">
          <div className="w-[200px] h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <Link href="./list">
              <Image
                src={pic3}
                alt="product1"
                className="h-full w-full object-contain transform transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </div>



        </div>

      </div>







      {/* <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">
          Top Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {
            myproducts.map((data) => (
              <div className="bg-white overflow-hidden cursor-pointer">
                <div className="w-full h-[150px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <Image
                    src={data.imgae}
                    alt="product1"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    {data.prouct_name}
                  </h3>
                  <h4 className="text-lg text-blue-600 font-bold mt-3">{data.price}</h4>
                </div>
                <div className="flex justify-center space-x-1 mt-3">
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>

            ))
          }




        </div>
      </div> */}

    </div>
  )
}