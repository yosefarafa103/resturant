import { Star, User } from "lucide-react";
import SectionBrief from "./SectionBrief";
import Styles from "../styles/Testemonials.module.css";
import { cn } from "@/lib/utils";
import { testimonials, borderColors } from "@/data/rates";
const Testemonials = () => {
  return (
    <div>
      <SectionBrief title="They Was Love Us" />
      <div className={cn("wrapper overflow-x-hidden")}>
        <section
          className={cn(
            Styles.wrapper,
            "grid grid-flow-col auto-cols-[300px] gap-3 min-w-250"
          )}
        >
          {testimonials.map((el) => (
            <RateItem key={el.name + el.id + el.text} {...el} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Testemonials;
interface Props {
  name: string;
  username: string;
  text: string;
  color?: string;
}
function RateItem({ name, text, username, color }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col p-5 rounded-lg border-b-4 my-4 min-w-50!",
        `${
          color
            ? borderColors[color as keyof typeof borderColors]
            : "border-purple-500"
        }`
      )}
    >
      <div className="flex gap-1 items-center">
        <Star size={18} fill="black" />
        <Star size={18} fill="black" />
        <Star size={18} fill="black" />
        <Star size={18} fill="black" />
        <Star size={18} />
      </div>
      <h4 className="font-semibold text-lg">{name}</h4>
      <p>{text}</p>
      <div className="flex gap-2 items-center mt-20">
        <User />
        <div className="flex flex-col">
          <h5>{name}</h5>
          <h6>{username}</h6>
        </div>
      </div>
    </div>
  );
}
