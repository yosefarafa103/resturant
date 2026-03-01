import { companies } from "@/data/companies";
import { SectionBrief } from "../home/components";
import CompanyCard from "./_components/CompanyCard";

const page = () => {
  return (
    <>
      <SectionBrief.Title title={`المطاعم (${companies.length})`} />
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 m-5">
        {companies.map((company) => (
          <CompanyCard {...company} />
        ))}
      </section>
    </>
  );
};
export default page;
