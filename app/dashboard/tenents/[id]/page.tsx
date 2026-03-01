import { BranchesContainer } from "@/app/companies/[companyId]/branches/page";
import { companies } from "@/data/companies";
const page = async ({ params }: PageProps<"/dashboard/tenents/[id]">) => {
  const isAuthed = true;
  if (!isAuthed) return <p>you're doesnt have to enter this dashbaord</p>;
  const tenentId = Number((await params).id);
  return (
    <>
      <h2 className="text-3xl font-semibold mx-2 mt-10">
        {companies[tenentId - 1].name}
      </h2>
      {/* Branches */}
      <h4 className="text-2xl mx-2 mt-10">اداره الفروع</h4>
      <BranchesContainer isEditing company={companies[tenentId - 1]} />
      {/* Offers */}
      <h4 className="text-2xl mx-2 mt-10">ادارة العروض</h4>
      <BranchesContainer isEditing company={companies[tenentId - 1]} />
      {/* Orders */}
      <h4 className="text-2xl mx-2 mt-10">ادارة الطلبات</h4>
      <BranchesContainer isEditing company={companies[tenentId - 1]} />
    </>
  );
};

export default page;
