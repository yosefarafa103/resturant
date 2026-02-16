"use client";
import pizza from "@/public/assets/imgs/premium_vector-1730515692314-ba66a6869cc2.png";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Store } from "lucide-react";
import { menu } from "@/data/menu";
import Link from "next/link";

type Menuu = "Spicy" | "Pizza" | "Drinks" | "all";
interface Menuuuu {
  items: { title: string; id: string }[];
  category: string;
}
[];
const Menu = () => {
  const categories: Menuu[] = ["all", "Pizza", "Spicy", "Drinks"];

  const [selectedItem, setSelectedItem] = useState<Menuu>("all");
  const [itemsMenu, setItemsMenu] = useState<string[]>([]);

  useEffect(() => {
    if (selectedItem === "all") {
      setItemsMenu(menu.map((el) => el.items.map((item) => item.title)).flat());
    } else {
      setItemsMenu(
        menu
          .filter(
            (item) =>
              item.category.toLowerCase() === selectedItem.toLowerCase(),
          )
          .map((el) => el.items.map((item) => item.title))
          .flat(),
      );
    }
  }, [selectedItem]);

  return (
    <>
      <section className="flex items-center gap-1 p-2 rounded-lg bg-[#ffbe6964] w-fit mx-auto mb-2">
        {categories.map((el) => (
          <Button
            key={el}
            onClick={() => setSelectedItem(el)}
            className="p-5 rounded-full"
            variant={el === selectedItem ? "default" : "ghost"}
          >
            {el}
          </Button>
        ))}
      </section>

      <section className="grid grid-cols-3 max-sm:grid-cols-1 gap-2">
        {itemsMenu.map((el) => (
          <Link
            key={el}
            href={`/dishes${
              selectedItem === "all" ? "" : "/" + selectedItem.toLowerCase()
            }/${el?.toLowerCase().replaceAll(" ", "-")}`}
            className="relative group overflow-hidden rounded-4xl cursor-pointer"
          >
            <div className="max-sm:hidden absolute w-full h-full bg-gray-800/50 transition opacity-0 group-hover:opacity-100">
              <div className="absolute bottom-3 left-3">
                <h3 className="text-3xl font-semibold">{el}</h3>
              </div>
            </div>
            <Button
              variant="ghost"
              className="rounded-full absolute top-3 right-3 isolate z-999"
              size="icon-lg"
            >
              <Store />
            </Button>
            <img
              className="object-cover rounded-4xl border border-black"
              src={pizza.src}
              alt={el}
            />
          </Link>
        ))}
      </section>
    </>
  );
};

export default Menu;
