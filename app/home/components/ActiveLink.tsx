"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useState,
} from "react";
interface Props {
  path: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  iconSize?: "icon-sm" | "icon-lg";
}
const ActiveHeaderLink = ({ Icon, path, iconSize = "icon-lg" }: Props) => {
  const pathname = usePathname();
  const [isActiveLink, setIsActiveLink] = useState<boolean>(false);
  useEffect(() => {
    if (pathname.split("/")[1] === path.split("/")[1]) setIsActiveLink(true);
    else setIsActiveLink(false);
  }, [pathname]);
  return (
    <Button
      variant="borderBlack"
      size={iconSize}
      className={cn(
        "rounded-full border border-black",
        isActiveLink ? "bg-black text-white" : "",
      )}
      asChild
    >
      <Link href={{ pathname: path }} className="relative">
        <Icon />
      </Link>
    </Button>
  );
};

export default ActiveHeaderLink;
