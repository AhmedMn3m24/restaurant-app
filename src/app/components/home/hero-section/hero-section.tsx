"use client";
import Image from "next/image";
import img from "@/public/assets/images/menu/bg-header.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen overflow-hidden">
      <Image
        src={img}
        alt="Best quality food background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/20" />

      {/* المحتوى */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-5 sm:px-10 md:px-16 lg:px-24">
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold uppercase text-white
            leading-tight tracking-wide
            drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]
            max-w-2xl
          "
        >
          Best quality  <br />
          Food
        </h1>

        <p
          className="
            mt-4 sm:mt-5 md:mt-6
            text-sm sm:text-base md:text-lg
            text-white/90 leading-relaxed
            max-w-[85%] sm:max-w-md md:max-w-lg
            drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]
          "
        >
          Enjoy delicious meals prepared with fresh ingredients and amazing
          flavors. We serve high quality food made with passion to make every
          meal a special experience.
        </p>
      </div>
    </section>
  );
}