"use client";
import pizza from "@/public/assets/imgs/premium_vector-1730515692314-ba66a6869cc2.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Store } from "lucide-react";
type Menuu = "Burger" | "All Menu" | "Pizza" | ("Subway" & string);
const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<Menuu>("All Menu");
  return (
    <>
      <section className="flex items-center gap-1 p-2 rounded-lg bg-[#ffbe6964] w-fit mx-auto mb-2">
        {["All Menu", "Burger", "Pizza", "Subway"].map((el) => (
          <Button
            onClick={() => setSelectedItem(el as Menuu)}
            className="p-5 rounded-full"
            variant={el === selectedItem ? "default" : "ghost"}
          >
            {el}
          </Button>
        ))}
      </section>
      <section className="grid grid-cols-3 max-sm:grid-cols-1 gap-2 flex-wrap">
        <div className="relative">
          <Button
            variant="ghost"
            className="rounded-full absolute top-3 right-3"
            size="icon-lg"
          >
            <Store />
          </Button>
          <img
            className="object-cover rounded-4xl border border-black "
            src={pizza.src}
            alt=""
          />
        </div>
        <div className="relative">
          <Button
            variant="ghost"
            className="rounded-full absolute top-3 right-3"
            size="icon-lg"
          >
            <Store />
          </Button>
          <img
            className="object-cover rounded-4xl border border-black "
            src={pizza.src}
            alt=""
          />
        </div>
        <div className="relative">
          <Button
            variant="ghost"
            className="rounded-full absolute top-3 right-3"
            size="icon-lg"
          >
            <Store />
          </Button>
          <img
            className="object-cover rounded-4xl border border-black "
            src={pizza.src}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Menu;
