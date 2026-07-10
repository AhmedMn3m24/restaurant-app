import MenuSection from "../components/menu-section/menu-section";

async function getMenu() {
  const res = await fetch("http://localhost:3000/api/menu", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  return res.json();
}

export default async function Menu() {
  const menu = await getMenu();

  return (
    <div>
      <MenuSection menu={menu} />
    </div>
  );
}