import HeroSection from "./components/home/hero-section/hero-section";
import Chefs from "./components/chefs/chef";
import SpecialDishes from "./components/special-dishes/special-dishes";
import MenuSection from "./components/menu-section/menu-section";
import ContactMap from "./components/contacts/contact-map";
import HomeContact from "./components/contacts/home-contact-section";
import Gallery from "./components/gallery/gallery";
import { headers } from "next/headers";

async function getMenu() {
  try {
    const host = (await headers()).get("host");
    const protocol =
      process.env.NODE_ENV === "development" ? "http" : "https";
console.log(process.env.NEXT_PUBLIC_BASE_URL);
    const res = await fetch(`${protocol}://${host}/api/menu`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch menu");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const menu = await getMenu();

  return (
    <>
      <HeroSection />
      <main>
        <SpecialDishes />
        <Chefs />
        <MenuSection menu={menu} />
        <Gallery />
        <section>
          <HomeContact />
        </section>
        
      </main>
    </>
  );
}
