"use client";

import { useState } from "react";
import Link from "next/link";
import { platformNavigation } from "../_constants";
import { Company } from "../types/company";
import { Button } from "@/components/ui/button";
import { TextAlignJustify, X } from "lucide-react";
import { useParams } from "next/navigation";
import SectionContainer from "@/components/SectionContainer";

interface CompanyPageProps {
  company: Company;
}
const CompanyPage: React.FC<CompanyPageProps> = ({ company }) => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  return (
    <>
      <SectionContainer className="min-h-[25vh] mt-5 sticky top-0 right-0 z-50">
        <div className="mx-auto pb-6 flex items-center gap-4 mr-7">
          <img
            src={company?.logo}
            alt={company?.name}
            className="w-20 h-20 object-contain rounded-full border-2"
          />

          <div>
            <h1 className="text-2xl font-bold">{company?.name}</h1>
            <p className="text-sm text-gray-500">{company.description}</p>
            <span
              className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
                company.isOpen
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {company.isOpen ? "Open now" : "Closed"}
            </span>
          </div>
        </div>

        <div className="hidden lg:flex gap-2 px-4 pb-4">
          {platformNavigation.map(({ label, path }) => (
            <Button key={path} asChild variant="restaurant">
              <Link href={`/companies/${params.companyId}/${path}`}>
                {label}
              </Link>
            </Button>
          ))}
        </div>
        <div className="lg:hidden border-2 border-orange-500 p-2 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">عرض الاقسام</h3>
            <Button
              variant="restaurant"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md transition"
            >
              {isOpen ? <X /> : <TextAlignJustify />}
            </Button>
          </div>
          {isOpen && (
            <div className="flex flex-col gap-2 mt-3">
              {platformNavigation.map(({ label, path }) => (
                <Button
                  key={path}
                  asChild
                  variant="restaurant"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={`/companies/${params.companyId}/${path}`}>
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </SectionContainer>
    </>
  );
};

export default CompanyPage;
