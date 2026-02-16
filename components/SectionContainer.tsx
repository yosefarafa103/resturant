import { cn } from "@/lib/utils";

const SectionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("bg-white transition rounded-lg p-5 mx-auto max-sm:w-[95%] ", className)}>
      {children}
    </div>
  );
};

export default SectionContainer;
