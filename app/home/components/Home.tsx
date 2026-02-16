import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import VideoSections from "./VideoSections";
import Link from "next/link";
import { OurDishes, GallerySection } from ".";
import Testemonials from "./Testemonials";
const Home = () => {
  return (
    <div className="px-10">
      <section className="flex flex-col gap-5 items-center pt-25">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5"
          strokeLinejoin="round"
          stroke-linejoin="round"
          className="lucide lucide-chef-hat-icon lucide-chef-hat relative -top-10 text-[#dda15e]"
        >
          <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
          <path d="M6 17h12" />
        </svg>
        <h2 className="leading-[1.4] text-4xl max-sm:text-center">
          Savor The Taste Of Perfection
        </h2>
        <p className="max-sm:text-center text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorem
          veritatis natus alias quidem maxime nesciunt exercitationem illum
          nostrum? Culpa.
        </p>
        <Button
          className="p-6.5 px-9! rounded-full shadow-md shadow-amber-600"
          variant="orange"
        >
          <Link href={{ pathname: "/orders" }}>Order Now</Link>
          <ArrowRight />
        </Button>
      </section>
      <VideoSections />
      <OurDishes />
      <GallerySection />
      <Testemonials />
    </div>
  );
};

export default Home;
