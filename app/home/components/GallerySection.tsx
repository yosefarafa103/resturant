"use client";
import pizza from "@/public/assets/imgs/premium_vector-1730515692314-ba66a6869cc2.png";
import SectionBrief from "./SectionBrief";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Styles from "../styles/Gallery.module.css";
const GallerySection = () => {
  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    const counterInterval = setInterval(() => {
      if (currentImg >= 8) {
        setCurrentImg(0);
      } else {
        setCurrentImg((prev) => prev + 1);
      }
    }, 5_000);
    return () => clearInterval(counterInterval);
  }, [currentImg]);
  return (
    <section className="my-10">
      <SectionBrief isDescription={false} title="A Feast For Your Eyes" />
      <section className="">
        <div className="flex max-sm:grid max-sm:grid-cols-1 gap-4 overflow-x-scroll py-5 ">
          {[1, 2, 3, 4, 5, 6, 8, 9, 10].map((_, idx) => (
            <div className="relative">
              <img
                src={pizza.src}
                alt=""
                className={cn(
                  "w-auto sm:w-60 h-85 object-cover rounded-lg transition-all duration-500",
                  currentImg === idx ? "sm:w-120!" : "w-full"
                )}
              />
              {idx === currentImg ? (
                <div
                  className={`sm:absolute mt-1 rounded-md bg-black ${Styles.timer}`}
                ></div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default GallerySection;
