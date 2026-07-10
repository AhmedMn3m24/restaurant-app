"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import dish1 from "@/public/assets/images/menu/special-dishes-1.png";
import dish2 from "@/public/assets/images/menu/special-dishes-2.jpg";
import dish3 from "@/public/assets/images/menu/special-dishes-3.jpg";
import dish4 from "@/public/assets/images/menu/special-dishes-4.jpg";
import dish5 from "@/public/assets/images/menu/special-dishes-5.png";

const specialMeals = [
  {
    id: 1,
    name: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$40",
    image: dish1,
  },
  {
    id: 2,
    name: "Pasta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$100",
    image: dish2,
  },
  {
    id: 3,
    name: "Beef",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$60",
    image: dish3,
  },
  {
    id: 4,
    name: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$120",
    image: dish4,
  },
  {
    id: 5,
    name: "Salad",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$20",
    image: dish5,
  },
];

export default function SpecialDishes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specialMeals.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const visibleMeals = [
    specialMeals[currentIndex],
    specialMeals[(currentIndex + 1) % specialMeals.length],
    specialMeals[(currentIndex + 2) % specialMeals.length],
  ];

  return (
    <section className="py-20 px-8 overflow-hidden bg-[#161616] text-white">
      <h1 className="text-5xl font-bold text-center">Our Special Dishes</h1>

      <p className="text-center max-w-3xl mx-auto mt-4 text-gray-500">
  Discover our chef's special dishes, prepared with fresh ingredients and
  unique flavors to give you an unforgettable dining experience.
</p>

      <AnimatePresence mode="wait">
        <div className="overflow-hidden mt-12">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -400, -800, -1200],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {specialMeals.concat(specialMeals).map((meal, index) => (
              <div
                key={`${meal.id}-${index}`}
                className="min-w-[350px] rounded-2xl shadow-2xl p-4 bg-black"
              >
                <Image
                  src={meal.image}
                  alt={meal.name}
                  width={350}
                  height={240}
                  className="w-full h-60 object-cover rounded-xl"
                />

                <h2 className="text-2xl font-bold mt-4">{meal.name}</h2>

                <p className="text-gray-500 mt-2">{meal.desc}</p>

                <p className="text-orange-500 text-xl mt-3 font-semibold">
                  {meal.price}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatePresence>
    </section>
  );
}
