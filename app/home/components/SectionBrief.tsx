type Props = Partial<{
  title: string;
  description: string;
  isDescription?: boolean;
}>;
const SectionBrief = ({ title, description, isDescription = true }: Props) => {
  return (
    <section className="flex flex-col items-center mb-10">
      <h2 className="leading-[1.4] text-4xl max-sm:text-center">
        {title || "Savor The Taste Of Perfection"}
      </h2>
      <p className="max-sm:text-center text-balance mt-4">
        {description
          ? description
          : !isDescription
            ? ""
            : `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorem
        veritatis natus alias quidem maxime nesciunt exercitationem illum
        nostrum? Culpa.
        `}
      </p>
    </section>
  );
};
SectionBrief.Title = ({ title }: Pick<Props, "title">) => (
  <h2 className="leading-[1.4] capitalize max-sm:mt-3 max-sm:ml-3 text-2xl font-semibold">
    {title || "Savor The Taste Of Perfection"}
  </h2>
);
export default SectionBrief;
