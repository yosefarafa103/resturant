type Props = Partial<{
  title: string;
  description: string;
}>;
const SectionBrief = ({ title, description }: Props) => {
  return (
    <section className="flex flex-col items-center mb-10">
      <h2 className="font-[propagan] leading-[1.4] text-4xl max-sm:text-center">
        {title || "Savor The Taste Of Perfection"}
      </h2>
      <p className="max-sm:text-center text-balance mt-4">
        {description ||
          `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorem
        veritatis natus alias quidem maxime nesciunt exercitationem illum
        nostrum? Culpa.
        `}
      </p>
    </section>
  );
};

export default SectionBrief;
