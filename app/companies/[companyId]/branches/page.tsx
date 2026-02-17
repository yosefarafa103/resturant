import SectionContainer from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { companies } from "@/data/companies";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import CompanyLocation from "../../_components/CompanyLocation";
const page = async ({
  params,
}: PageProps<"/companies/[companyId]/branches">) => {
  const company = companies[Number((await params).companyId) - 1];
  return (
    <SectionContainer className="mt-5">
      <h4 className="font-bold text-xl">الفروع</h4>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {company.branches.map((branch) => (
          <div
            key={branch.id}
            className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold">{branch.name}</h3>

              <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                مفتوح
              </span>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mt-1 text-orange-500" />
              <span>{branch.address}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Phone className="w-4 h-4 text-orange-500" />
              <span>{branch.phone}</span>
            </div>

            <div className="flex gap-2 mt-4">
              <Button asChild size="sm" variant="restaurant">
                <Link href={`/restaurant/${company.slug}/${branch.name}`}>
                  عرض التفاصيل
                </Link>
              </Button>

              <Button size="sm" variant="outline">
                اتصال
              </Button>
            </div>
            <CompanyLocation position={[branch.lat, branch.lng]} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default page;
