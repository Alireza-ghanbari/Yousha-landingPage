import Atropos from "atropos/react";
import teacher1 from "../assets/teacher.png";
import "atropos/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const teachers = [
  {
    image: teacher1,
    name: "محمد امین علیزاده",
    description:
      "بیــش از ۵ ســالــه کــه تــو ایــن حـــرفــه مشغـــول بــه کــارم و تــا الان بیــش از ۲۰۰ پــروژه انجــام شده دارم، هــدف از ســاختــن ایــن دوره اینــه کــه بتــونم مهــارت , دانشــم رو بــا همــه آدمــای کــشورم بــه اشتــراک بــذارم و بتونـــم یـــک تــاثیــر مثــبــت و یـــک اتفـــاق خوبی را ثبـــت کنـــم ...",
  },
  {
    image: teacher1,
    name: "محمد امین علیزاده",
    description:
      "بیــش از ۵ ســالــه کــه تــو ایــن حـــرفــه مشغـــول بــه کــارم و تــا الان بیــش از ۲۰۰ پــروژه انجــام شده دارم، هــدف از ســاختــن ایــن دوره اینــه کــه بتــونم مهــارت , دانشــم رو بــا همــه آدمــای کــشورم بــه اشتــراک بــذارم و بتونـــم یـــک تــاثیــر مثــبــت و یـــک اتفـــاق خوبی را ثبـــت کنـــم ...",
  },
  {
    image: teacher1,
    name: "محمد امین علیزاده",
    description:
      "بیــش از ۵ ســالــه کــه تــو ایــن حـــرفــه مشغـــول بــه کــارم و تــا الان بیــش از ۲۰۰ پــروژه انجــام شده دارم، هــدف از ســاختــن ایــن دوره اینــه کــه بتــونم مهــارت , دانشــم رو بــا همــه آدمــای کــشورم بــه اشتــراک بــذارم و بتونـــم یـــک تــاثیــر مثــبــت و یـــک اتفـــاق خوبی را ثبـــت کنـــم ...",
  },
];

export default function TeachersSection() {
  return (
    <section className="w-full py-32 container">
      <h2 className="text-4xl font-bold mb-12">معرفی اساتید دوره</h2>
      <Swiper spaceBetween={100} slidesPerView={1}>
        {teachers.map((teacher, key) => (
          <SwiperSlide key={key}>
            <div className="flex lg:flex-row space-y-8 flex-col items-center justify-center lg:space-x-14 py-2">
              <Atropos
                shadow={false}
                rotateXMax={10}
                rotateYMax={10}
                activeOffset={20}
                duration={100}
              >
                <div className="relative w-[250px] h-[250px] sm:w-[320px] sm:h-[320px]">
                  <div className="absolute inset-0 bg-secondary m-1 rounded-full" />

                  <img
                    src={teacher.image}
                    alt="teacher"
                    className="relative w-full h-full bg-secondary/75 p-2 rounded-full object-contain"
                  />

                  <div className="absolute w-3 h-3 bg-yellow-400 rounded-full top-4 left-4" />
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full bottom-4 left-4" />
                  <div className="absolute w-2 h-2 bg-purple-500 rounded-full bottom-2 left-10" />
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full top-6 right-8" />
                  <div className="absolute w-2 h-2 bg-green-400 rounded-full top-10 right-4" />
                  <div className="absolute w-2 h-2 bg-green-400 rounded-full top-10 left-2" />
                  <div className="absolute w-2.5 h-2.5 bg-green-400 rounded-full bottom-10 left-4" />
                </div>
              </Atropos>

              <div className="flex flex-col items-start justify-start space-y-4 px-6 sm:px-0">
                <h3 className="text-secondary text-2xl font-bold">
                  {teacher.name}
                </h3>
                <p className="text-start leading-8 text-primary/80 text-lg">
                  {teacher.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
