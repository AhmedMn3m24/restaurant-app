"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { WishlistContext } from "@/src/Context/WishlistContext";
import { CounterContext } from "@/src/Context/CounterContext";

type MenuItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
};export default function MenuSection({ menu }: { menu: MenuItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const wishlistContext = useContext(WishlistContext);
  const counterContext = useContext(CounterContext);

  if (!wishlistContext || !counterContext) return null;

  const { wishlist, addToWishlist } = wishlistContext;
  const { setCounter } = counterContext;

  const categories = ["All", ...new Set(menu.map((item) => item.category))];

  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter((item) => item.category === selectedCategory);

  return (
    <section className="bg-[#1B1B1B] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-4 text-center text-5xl font-bold text-white">
          Our Menu
        </h1>

        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-gray-400">
          Explore our delicious menu featuring fresh burgers, crispy pizzas,
          tasty pasta, and more meals made with passion and quality ingredients.
        </p>

        {/* Categories */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-[#2A2A2A] text-gray-300 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMenu.map((item) => {
            const isFavorite = wishlist.some(
              (product) => product.id === item.id
            );

            return (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl bg-[#1b1b1b] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-500/20"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={350}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-400">
                      {item.category}
                    </span>

                    <button
                      onClick={() => addToWishlist(item)}
                      className="rounded-full p-2 transition hover:bg-red-500/10"
                    >
                      <Heart
                        className={`h-6 w-6 ${
                          isFavorite
                            ? "fill-red-500 text-red-500"
                            : "text-red-500"
                        }`}
                      />
                    </button>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold text-white">
                    {item.name}
                  </h2>

                 <p className="mt-3 h-[72px] line-clamp-3 text-gray-400">
  {item.description}
</p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">
                      ${item.price}
                    </span>

                    <button
                      onClick={() => setCounter((prev) => prev + 1)}
                      className="rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}