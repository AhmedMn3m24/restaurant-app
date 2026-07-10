"use client";

import { createContext, useState } from "react";

type MenuItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
};

type WishlistContextType = {
  wishlist: MenuItem[];
  addToWishlist: (item: MenuItem) => void;
  removeFromWishlist: (id: number) => void;
};

export const WishlistContext = createContext<WishlistContextType | null>(null);

export default function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wishlist, setWishlist] = useState<MenuItem[]>([]);

  const addToWishlist = (item: MenuItem) => {
    const exists = wishlist.some((product) => product.id === item.id);

    if (!exists) {
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}