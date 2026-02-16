"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { companies } from "@/data/companies";
import Link from "next/link";

const CategoriesPage = () => {
  const items = companies
    .map((el) => el.categories)
    .filter((el) => el?.length)
    .flat();
  console.log(items);
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((category) => {
          const availableCount = category?.meals.filter(
            (meal) => meal.available && (meal.stock ?? 1) > 0,
          ).length;
          const totalCount = category?.meals.length;
          console.log(category?.meals);

          return (
            <Link key={category?.id} href={`#${category?.slug}`}>
              <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl border border-orange-500">
                <CardContent className="flex flex-col justify-between h-full ">
                  <>
                    <img
                      className="rounded-lg h-50 object-cover"
                      src={category?.meals[0].image.src}
                      alt=""
                    />
                    <h3 className="text-xl font-semibold mb-2 mt-4 group-hover:text-primary transition">
                      {category?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {availableCount} من {totalCount} متاح
                    </p>
                  </>

                  <div className="mt-4 flex items-center justify-between">
                    <Badge variant="secondary">{totalCount} منتج</Badge>

                    {availableCount === 0 && (
                      <Badge variant="destructive">غير متوفر حالياً</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CategoriesPage;
