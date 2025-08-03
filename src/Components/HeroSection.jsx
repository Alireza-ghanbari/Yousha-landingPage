import { FaPlay } from "react-icons/fa";
import banner from "../assets/banner.jpg";
export default function HeroSection() {
  return (
    <section className="w-full container max-sm:px-[1px]">
      <div className="relative max-sm:rounded-none rounded-3xl shadow-2xl shadow-primary/60 overflow-hidden h-[550px]">
        <img src={banner} alt="banner" className="absolute w-full h-full object-cover" />
        <div className="absolute flex justify-center items-center bg-secondary/75 inset-0">
          <div className="flex flex-col items-center space-y-6 sm:space-y-6 text-white mt-10">
            <h2 className="px-4 sm:px-0 text-4xl md:text-5xl font-extrabold drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]">
              دوره ورکشـاپ ویدئویـی درآمـد دلاری
            </h2>
            <p className="sm:text-lg mx-auto w-full px-4 sm:px-0 sm:w-2/3 leading-10 opacity-70 drop-shadow-[0_0_4px_rgba(0,0,0,0.2)]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم چاپ و با استفاده از
              طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است...
            </p>
            <div className="p-2 bg-background/40 hover:bg-transparent transition-all cursor-pointer rounded-full">
              <button className="p-4  bg-white cursor-pointer text-yellow-400 rounded-full ">
                <FaPlay size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
