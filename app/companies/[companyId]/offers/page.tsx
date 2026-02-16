import SectionContainer from "@/components/SectionContainer";
import OffersSection from "../../_components/OfferSection";
import { companies } from "@/data/companies";

const page = async ({ params }: PageProps<"/companies/[companyId]/offers">) => {
  const company = companies[Number((await params).companyId) - 1];
  return (
    <SectionContainer className="mt-5">
      <h4 className="font-bold text-lg mb-5">
        العروض المتاحة ({company.offers.length})
      </h4>
      <OffersSection company={company} />
    </SectionContainer>
  );
};

export default page;
