"use client";

import { usePathname } from "next/navigation";
const PageContent = () => {
  const pn = usePathname();
  return <div> {pn} PageContent</div>;
};

export default PageContent;
