import { Container } from "@/app/home/components";
import { Button } from "@/components/ui/button";
import { menu } from "@/data/menu";
import { Store } from "lucide-react";
import pizza from "@/public/assets/imgs/premium_vector-1730515692314-ba66a6869cc2.png";
import AddToCartButton from "../../_components/AddToCartButton";

const page = async ({
  params,
}: PageProps<"/dishes/[category]/[subcategory]">) => {
  const category = (await params).category.toLowerCase();
  const currentItem = menu.find(
    (item) => item.category.toLowerCase() === category,
  );
  return (
    <Container>
      <h3 className="text-2xl font-semibold mt-5">
        {category.toUpperCase()} DISHES
      </h3>
      <section className="grid grid-cols-3 max-sm:grid-cols-1 gap-2 p-4">
        {currentItem?.items.map((el) => (
          <div className="relative group overflow-hidden rounded-4xl cursor-pointer">
            <div className="max-sm:hidden absolute w-full h-full bg-gray-800/50 transition opacity-0 group-hover:opacity-100">
              <div className="absolute bottom-3 left-3">
                <h3 className="text-3xl font-semibold">{el.title}</h3>
              </div>
            </div>
            <AddToCartButton id={el.id} />
            <img
              className="object-cover rounded-4xl border border-black"
              src={pizza.src}
              alt={el.title}
            />
          </div>
        ))}
      </section>
    </Container>
  );
};

export default page;
