import { companies } from "@/data/companies";
import React from "react";
import CompanyPage from "../_components/CompanyPage";

const page = async ({
  children,
  params,
}: { children: React.ReactNode } & PageProps<"/companies/[companyId]">) => {
  const { companyId } = await params;
  return (
    <>
      <CompanyPage company={companies[Number(companyId) - 1]} />
      {children}
    </>
  );
};

export default page;
