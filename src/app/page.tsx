import HeroSection from "./components/home/hero-section/hero-section";
import Chefs from "./components/chefs/chef";
import SpecialDishes from "./components/special-dishes/special-dishes";
import MenuSection from "./components/menu-section/menu-section";
import HomeContact from "./components/contacts/home-contact-section";
import Gallery from "./components/gallery/gallery";

import menu from "@/src/data/menu.json";

export default function Home() {
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