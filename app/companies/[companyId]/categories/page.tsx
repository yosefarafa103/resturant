import SectionContainer from "@/components/SectionContainer";
import CategoriesPage from "../../_components/CategoriesPage";

const page = () => {
  return (
    <SectionContainer className="mt-5">
      <h4 className="font-bold text-lg mb-5">الاقسام</h4>
      <CategoriesPage />
    </SectionContainer>
  );
};

export default page;
