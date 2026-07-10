import HeroSection from "./components/home/hero-section/hero-section";
import Chefs from "./components/chefs/chef";
import SpecialDishes from "./components/special-dishes/special-dishes";
import MenuSection from "./components/menu-section/menu-section";
import ContactMap from "./components/contacts/contact-map";
import HomeContact from "./components/contacts/home-contact-section";
import Gallery from "./components/gallery/gallery";

async function getMenu() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/menu`);

    if (!res.ok) {
      throw new Error("Failed to fetch menu");
    }

    const data = await res.json();
    return data;
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
