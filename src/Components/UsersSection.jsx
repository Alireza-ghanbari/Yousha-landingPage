import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import { EffectCoverflow } from 'swiper/modules';

const users = [
  {
    image: user1,
    name: "محمد امین علیزاده",
    description:
      "واقعـاا از دوره خیلـی رضایـت دارم ، پشتیبـانی عـالی ، کیفیـت واقعـا عـالی ، نکتـه هـای آمـوزشی خیلـی ریز ، مهم و کاربردی داره ، همینطـور تمریـن هــا که باعث به چــالش کـشیده شدن من شـد باعثـ رشد و پیشرفـتــ من شد ، و مهمتریـن نکتــه بررسی تمرینات ، ارائه فیدبک و راهنمایی کـارفرمـا باعث شده ایـن دوره واقعـاا بی نظیـر بـاشـهـ خیلی ممنونـم بابـت آمـوزش خیلـی خــوبتــونـ نکـات خیلـی ریـزی یــاد گـرفتــم.",
    info: "هنـرجـوی دوره آموزشی ویدئویی درآمد دلاری",
  },
  {
    image: user2,
    name: "احمد حسین زاده",
    description:
      "واقعـاا از دوره خیلـی رضایـت دارم ، پشتیبـانی عـالی ، کیفیـت واقعـا عـالی ، نکتـه هـای آمـوزشی خیلـی ریز ، مهم و کاربردی داره ، همینطـور تمریـن هــا که باعث به چــالش کـشیده شدن من شـد باعثـ رشد و پیشرفـتــ من شد ، و مهمتریـن نکتــه بررسی تمرینات ، ارائه فیدبک و راهنمایی کـارفرمـا باعث شده ایـن دوره واقعـاا بی نظیـر بـاشـهـ خیلی ممنونـم بابـت آمـوزش خیلـی خــوبتــونـ نکـات خیلـی ریـزی یــاد گـرفتــم.",
    info: "هنـرجـوی دوره آموزشی ویدئویی درآمد دلاری",
  },
  {
    image: user3,
    name: "مهدیه رضایی",
    description:
      "واقعـاا از دوره خیلـی رضایـت دارم ، پشتیبـانی عـالی ، کیفیـت واقعـا عـالی ، نکتـه هـای آمـوزشی خیلـی ریز ، مهم و کاربردی داره ، همینطـور تمریـن هــا که باعث به چــالش کـشیده شدن من شـد باعثـ رشد و پیشرفـتــ من شد ، و مهمتریـن نکتــه بررسی تمرینات ، ارائه فیدبک و راهنمایی کـارفرمـا باعث شده ایـن دوره واقعـاا بی نظیـر بـاشـهـ خیلی ممنونـم بابـت آمـوزش خیلـی خــوبتــونـ نکـات خیلـی ریـزی یــاد گـرفتــم.",
    info: "هنـرجـوی دوره آموزشی ویدئویی درآمد دلاری",
  },
  {
    image: user4,
    name: "سارا احمدی",
    description:
      "واقعـاا از دوره خیلـی رضایـت دارم ، پشتیبـانی عـالی ، کیفیـت واقعـا عـالی ، نکتـه هـای آمـوزشی خیلـی ریز ، مهم و کاربردی داره ، همینطـور تمریـن هــا که باعث به چــالش کـشیده شدن من شـد باعثـ رشد و پیشرفـتــ من شد ، و مهمتریـن نکتــه بررسی تمرینات ، ارائه فیدبک و راهنمایی کـارفرمـا باعث شده ایـن دوره واقعـاا بی نظیـر بـاشـهـ خیلی ممنونـم بابـت آمـوزش خیلـی خــوبتــونـ نکـات خیلـی ریـزی یــاد گـرفتــم.",
    info: "هنـرجـوی دوره آموزشی ویدئویی درآمد دلاری",
  },
  {
    image: user5,
    name: "رضا کریمی",
    description:
      "واقعـاا از دوره خیلـی رضایـت دارم ، پشتیبـانی عـالی ، کیفیـت واقعـا عـالی ، نکتـه هـای آمـوزشی خیلـی ریز ، مهم و کاربردی داره ، همینطـور تمریـن هــا که باعث به چــالش کـشیده شدن من شـد باعثـ رشد و پیشرفـتــ من شد ، و مهمتریـن نکتــه بررسی تمرینات ، ارائه فیدبک و راهنمایی کـارفرمـا باعث شده ایـن دوره واقعـاا بی نظیـر بـاشـهـ خیلی ممنونـم بابـت آمـوزش خیلـی خــوبتــونـ نکـات خیلـی ریـزی یــاد گـرفتــم.",
    info: "هنـرجـوی دوره آموزشی ویدئویی درآمد دلاری",
  },
  {
    image: user6,
    name: "نرگس فراهانی",
    description:
      "واقعـاا از دوره خیلـی رضایـت دارم ، پشتیبـانی عـالی ، کیفیـت واقعـا عـالی ، نکتـه هـای آمـوزشی خیلـی ریز ، مهم و کاربردی داره ، همینطـور تمریـن هــا که باعث به چــالش کـشیده شدن من شـد باعثـ رشد و پیشرفـتــ من شد ، و مهمتریـن نکتــه بررسی تمرینات ، ارائه فیدبک و راهنمایی کـارفرمـا باعث شده ایـن دوره واقعـاا بی نظیـر بـاشـهـ خیلی ممنونـم بابـت آمـوزش خیلـی خــوبتــونـ نکـات خیلـی ریـزی یــاد گـرفتــم.",
    info: "هنـرجـوی دوره آموزشی ویدئویی درآمد دلاری",
  },
];

export default function UsersSection() {
  const [width, setWidth] = useState(window.innerWidth);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full py-24 container px-4">
      <h2 className="text-4xl font-bold mb-12">تجربه همسفران ما</h2>
      <Swiper
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow]}
        loop={true}
        spaceBetween={0}
        slidesPerView={width > 1023 ? 3 : 1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        centeredSlides={true}
        className="w-full"
      >
        {users.map((user, key) => (
          <SwiperSlide key={key}>
            <div className="flex flex-col space-y-6 items-center justify-center cursor-grab active:cursor-grabbing ">
              {activeIndex === key && (
                <div className="bg-white rounded-xl flex flex-col space-y-10 items-center justify-between drop-shadow-[0_0_4px_rgba(0,0,0,0.1)] px-2 sm:px-4 py-6">
                  <p className="text-forground leading-7">{user.description}</p>
                  <button className="flex items-center gap-2 bg-secondary/30 text-secondary font-semibold px-4 py-2 rounded-xl cursor-pointer hover:bg-secondary/40 transition-colors">
                    <FaPlay size={18} />
                    مشاهده ویدیو مصاحبه با هنرجو
                  </button>
                </div>
              )}
              <div
                className={`flex flex-col items-center justify-center space-y-4 ${
                  activeIndex !== key && "opacity-70 scale-75"
                }`}
              >
                <img
                  src={user.image}
                  alt="users"
                  className="w-24 h-24 rounded-full object-cover bg-white border-4 border-secondary p-[2px]"
                />
                <div className="flex flex-col space-y-1">
                  <p className="text-secondary font-semibold text-lg">
                    {user.name}
                  </p>
                  <p className="text-forground">{user.info}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
