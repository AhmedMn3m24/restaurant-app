"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/menu/logo.png";
import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import { useContext, useState } from "react";
import { WishlistContext } from "@/src/Context/WishlistContext";
import { CounterContext } from "@/src/Context/CounterContext";

export default function Navbar() {
  const wishlistContext = useContext(WishlistContext);
  const counterContext = useContext(CounterContext);

  const [isOpen, setIsOpen] = useState(false);
  
if (!wishlistContext || !counterContext) return null;

const { wishlist } = wishlistContext;
const { counter } = counterContext;

  return (
    <header className="bg-[#111] shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-3 ">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={120}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-orange-500">
            Home
          </Link>

          <Link href="/menu" className="text-white hover:text-orange-500">
            Menu
          </Link>

          <Link href="/contacts" className="text-white hover:text-orange-500">
            Contacts
          </Link>

          {/* Cart */}
          <button className="relative">
            <ShoppingCart className="h-7 w-7 text-white" />

            {counter > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                {counter}
              </span>
            )}
          </button>

          {/* Wishlist */}
          <button className="relative">
            <Heart className="h-7 w-7 text-red-500" />

            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-7 w-7 text-white" />
          ) : (
            <Menu className="h-7 w-7 text-white" />
          )}
        </button>
      </nav>
    </header>
  );
}