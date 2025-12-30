import resutrantImg from "@/public/assets/imgs/pourya-z-7CV0-H5qHRk-unsplash (2).jpg";
import { Play } from "lucide-react";
import Image from "next/image";
const VideoSections = () => {
  return (
    <div className="sm:w-[85%] mx-auto my-10 relative group">
      <img
        className="w-full sm:h-[calc(100svh-200px)] h-[50vh] object-cover rounded-lg"
        src={resutrantImg.src}
        alt=""
      />
      <span className="absolute size-20 rounded-full bg-white flex items-center justify-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:bg-[#bbb] transition cursor-pointer">
        <Play fill="000" size={35} />
      </span>
    </div>
  );
};

export default VideoSections;
