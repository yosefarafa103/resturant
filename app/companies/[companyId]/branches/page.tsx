import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { companies } from "@/data/companies";
import { Edit, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import CompanyLocation from "../../_components/CompanyLocation";
import { Branch, Company } from "../../types/company";
interface CompanyProps {
  company: Company;
  isEditing?: boolean;
}
const page = async ({
  params,
}: PageProps<"/companies/[companyId]/branches">) => {
  const company = companies[Number((await params).companyId) - 1];
  return (
    <SectionContainer className="mt-5">
      <h4 className="font-bold text-xl">الفروع</h4>
      <BranchesContainer company={company} />
    </SectionContainer>
  );
};

export default page;
export function BranchesContainer({
  company,
  isEditing = false,
}: {
  company: Company;
  isEditing?: boolean;
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
      {company.branches.map((branch) => (
        <CompanyBranch companyBranch={branch} isEditing={isEditing} />
      ))}
    </div>
  );
}
export function CompanyBranch({
  companyBranch: { address, lat, lng, name, phone },
  isEditing,
}: {
  isEditing?: boolean;
  companyBranch: Branch;
}) {
  return (
    <div className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 mx-2">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        <section className="flex gap-1 items-center">
          {isEditing ? (
            <Button
              size="icon-sm"
              variant="restaurant"
              className="rounded-full"
            >
              <Edit />
            </Button>
          ) : null}
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
            مفتوح
          </span>
        </section>
      </div>
      <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mt-1 text-orange-500" />
        <span>{address}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Phone className="w-4 h-4 text-orange-500" />
        <span>{phone}</span>
      </div>

      <div className="flex gap-2 mt-4">
        <Button size="sm" variant="outline">
          اتصال
        </Button>
      </div>
      <CompanyLocation position={[lat, lng]} />
    </div>
  );
}
