"use client";
import pizza from "@/public/assets/imgs/premium_vector-1730515692314-ba66a6869cc2.png";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { Store } from "lucide-react";
import { menu } from "@/data/menu";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
type Menuu = {
  en: string;
  ar: string;
};
interface Menuuuu {
  items: { title: string; id: string }[];
  category: string;
}
[];
const Menu = () => {
  const categories: Menuu[] = [
    { en: "all", ar: "الكل" },
    { en: "Pizza", ar: "بيتزا" },
    { en: "Spicy", ar: "حار" },
    { en: "Drinks", ar: "مشروبات" },
  ];
  const [selectedItem, setSelectedItem] = useState<Menuu>({ ar: "", en: "" });
  const [itemsMenu, setItemsMenu] = useState<string[]>([]);
  const getCategoryItems = useCallback((type: string) => {
    return menu
      .filter((item) => item.category.toLowerCase() === type.toLowerCase())
      .map((el) => el.items)
      .flat();
  }, []);
  useEffect(() => {
    if (selectedItem.en === "all") {
      setItemsMenu(menu.map((el) => el.items.map((item) => item.title)).flat());
    } else {
      setItemsMenu(
        menu
          .filter(
            (item) =>
              item.category.toLowerCase() === selectedItem.en.toLowerCase(),
          )
          .map((el) => el.items.map((item) => item.title))
          .flat(),
      );
    }
  }, [selectedItem]);
  console.log(menu);
  return (
    <>
      {categories.map(function (el, i) {
        const food = getCategoryItems(el.en);
        console.log(food);
        return (
          <>
            <section className="flex items-center justify-between mt-4">
              <h4 key={el.ar} className="text-xl font-bold">
                {el.ar}
              </h4>
              <Button variant="orange">عرض المزيد</Button>
            </section>
            <Swiper className="mySwiper mt-5">
              {food.map((el) => (
                <SwiperSlide className="w-fit! mx-2">
                  <>
                    <ProductCard
                      name={el.title}
                      image={pizza.src}
                      price={12}
                      onAdd={() => console.log("add to cart")}
                    />
                  </>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        );
      })}
    </>
  );
};

export default Menu;
type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  onAdd: () => void;
  available?: boolean;
};

export function ProductCard({ image, name, price, onAdd }: ProductCardProps) {
  return (
    <div className="w-64 border border-black bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-40 object-cover" />

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>

        <p className="text-green-600 font-bold text-xl mb-4">{price} جنيه</p>

        <Button
          variant="borderBlack"
          onClick={onAdd}
          className="w-full  py-2 rounded-xl transition"
        >
          إضافة
        </Button>
      </div>
    </div>
  );
}
