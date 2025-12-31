import sticker from "@/public/assets/imgs/word-awesome-with-cloud-explosion-background-KE6REH-removebg-preview.png";
import { SectionBrief, Menu } from "../components";
import Image from "next/image";
const OurDishes = () => {
  return (
    <>
      <Image
        className="mx-auto"
        src={sticker.src}
        width={100}
        height={100}
        alt="sticker"
      />
      <SectionBrief title="Our Signature Dishes" />
      <Menu />
    </>
  );
};

export default OurDishes;
