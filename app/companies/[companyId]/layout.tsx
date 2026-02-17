import { companies } from "@/data/companies";
import React from "react";
import CompanyPage from "../_components/CompanyPage";
import "leaflet/dist/leaflet.css";
const page = async ({
  children,
  params,
}: { children: React.ReactNode } & LayoutProps<"/companies/[companyId]">) => {
  const { companyId } = await params;
  return (
    <>
      <CompanyPage company={companies[Number(companyId) - 1]} />
      {children}
    </>
  );
};

export default page;
