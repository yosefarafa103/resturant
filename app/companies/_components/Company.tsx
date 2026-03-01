import { BranchesContainer, CompanyBranch } from "../[companyId]/branches/page";
import CompanyPage from "./CompanyPage";
const Company = () => CompanyPage;
Company.CompanyBranchesContainer = BranchesContainer;
Company.Branch = CompanyBranch;
export default Company;
