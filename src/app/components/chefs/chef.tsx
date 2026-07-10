"use client";

import React from "react";
import Image from "next/image";

import chef1 from "@/public/assets/images/menu/chef-1.jpg";
import chef2 from "@/public/assets/images/menu/chef-2.jpg";
import chef3 from "@/public/assets/images/menu/chef-3.jpg";
import chef4 from "@/public/assets/images/menu/chef-4.jpg";

const chefs = [
  {
    img: chef1,
    name: "Richard Nauz",
    desc: "Food Chef",
  },

  {
    img: chef2,
    name: "Olivia Grosh",
    desc: "Food Chef",
  },

  {
    img: chef3,
    name: "Jeremy White",
    desc: "Food Chef",
  },

  {
    img: chef4,
    name: "Howard Holmes",
    desc: "Food Chef",
  },
];
export default function Chefs() {
  return (
    <section className="py-20 px-8 bg-[#111] text-white">
      <h1 className="text-5xl font-bold text-center">Meet Our Chefs</h1>

      <p className="text-center max-w-3xl mx-auto mt-4 text-gray-400">
        Meet our talented chefs who bring passion, creativity, and years of
        experience to every dish, creating flavors that make every meal special.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {chefs.map((chef, index) => (
          <div key={index} className="text-center rounded-xl p-4 ">
            <Image
              src={chef.img}
              alt={chef.name}
              className="w-full h-80x object-cover rounded-2xl"
            />

            <h2 className="text-2xl font-bold mt-4">{chef.name}</h2>

            <p className="text-orange-400 mt-2">{chef.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
