import MenuSection from "../components/menu-section/menu-section";
import menu from "@/src/data/menu.json";

export default function Menu() {
  return (
    <div>
      <MenuSection menu={menu} />
    </div>
  );
}