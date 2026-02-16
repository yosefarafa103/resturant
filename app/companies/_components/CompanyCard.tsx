import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CompanyCardProps {
  name: string;
  logo: string;
  description: string;
  isOpen: boolean;
  id: number;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  logo,
  description,
  isOpen,
  id,
}) => {
  return (
    <Link
      href={{ pathname: `/companies/${id}` }}
      className="
        bg-orange-200 rounded-2xl p-4 shadow-md cursor-pointer
        transition hover:-translate-y-1 hover:shadow-xl
        flex flex-col justify-between
      "
    >
      <div className="flex items-center justify-between">
        <img src={logo} alt={name} className="w-14 h-14 object-contain" />
        <span
          className={`
            px-3 py-1 text-xs font-bold rounded-full
            ${
              isOpen
                ? "bg-emerald-100 text-emerald-600"
                : "bg-red-100 text-red-600"
            }
          `}
        >
          {isOpen ? "Open" : "Closed"}
        </span>
      </div>

      <div className="my-3">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      <Button
        disabled={!isOpen}
        className={`
          w-full py-2 rounded-xl text-sm font-semibold transition
          ${
            isOpen
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }
        `}
      >
        {isOpen ? "View Menu" : "Unavailable"}
      </Button>
    </Link>
  );
};

export default CompanyCard;
