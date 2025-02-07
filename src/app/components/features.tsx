import Image from "next/image"
import pic from "../fa-brands-1.png"
import pic2 from "../fa-brands-3.png"
import pic3 from "../fa-brands-4.png"
import pic4 from "../fa-brands-5.png"
import pic5 from "../col-md-2.png"
export default function Features(){
    return(
        <div className="p-4">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 m-4">
    <Image src={pic} alt="Image 1" height={65} width={95} className="rounded-md" />
    <Image src={pic5} alt="Image 2" height={65} width={95} className="rounded-md" />
    <Image src={pic2} alt="Image 3" height={65} width={95} className="rounded-md" />
    <Image src={pic3} alt="Image 4" height={65} width={95} className="rounded-md" />
    <Image src={pic4} alt="Image 5" height={65} width={95} className="rounded-md" />
  </div>
</div>

    )
}