"use client";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Company } from "../types/company";
interface Props {
  company: Company;
}
const OffersSection = ({ company }: Props) => {
  if (!company.offers?.length) return null;
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-xl font-bold">العروض الخاصة</h2>
        <p className="text-gray-500 text-sm my-3">
          استمتع بأفضل العروض لفترة محدودة
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {company.offers.map((offer) => (
          <div
            key={offer.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                خصم {offer.discount}%
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{offer.description}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                <CalendarDays className="w-4 h-4 text-orange-500" />
                <span>ينتهي في {offer.expiresAt}</span>
              </div>
              <Button className="w-full" variant="restaurant">
                اطلب الآن
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;
