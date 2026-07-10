import Image from "next/image";

import img1 from "@/public/assets/images/menu/gallery-1.jpg";
import img2 from "@/public/assets/images/menu/gallery-2.jpg";
import img3 from "@/public/assets/images/menu/gallery-3.jpg";
import img4 from "@/public/assets/images/menu/gallery-4.jpg";
import img5 from "@/public/assets/images/menu/gallery-5.jpg";
import img6 from "@/public/assets/images/menu/gallery-6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  return (
    <section className="bg-[#111] py-20">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="mb-12 text-center text-4xl font-bold uppercase text-white ">
          Gallery
        </h2>

        {/* Images */}
        <div className="flex flex-wrap">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 overflow-hidden"
            >
              <Image
                src={image}
                alt={`gallery-${index + 1}`}
                className="h-[300px] w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
