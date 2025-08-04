import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { HiMiniDocument } from "react-icons/hi2";
import { IoTimeSharp } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

export default function TitleSection() {
  const data = [
    {
      title: "دوره آموزشی ویدئویی درآمد دلاری از یوتیوب",
      number: "12",
      time: "۴ ساعت ۲۹ دقیقه",
      children: {
        description:
          "تو این فصل شما یاد میگیرید چطور وایرفریم بکشید ، ساختار کلی سایت مشخص کنید و یادبگیرید چطور یک سایت نسبت به المان ها و خدمات گفته شده توسط کارفرما بچینید و بعد از مشخص کردن چیدمان سایت و طراحی وایرفریم چطور این وایرفریمو به پروتوتایپ تبدیل کنید تا کارفرما و کاربران عادی بتونند به صورت تستی با نرم افزار یا سایت کار کنند ...",
        tags: [
          "دوره آموزشی زبان انگلیسی برای کسب و کار",
          "کسب درآمد دلاری از سایت  3DSKY",
          "درآمد دلاری برای تدوینگر ها ",
          "دوره مشتریابی بین المللی",
          "گوگل ادسنس چیست",
        ],
      },
    },
    {
      title: "کسب درآمد دلاری با فریلنسری بین‌المللی",
      number: "8",
      time: "۳ ساعت ۱۵ دقیقه",
      children: {
        description:
          "در این فصل با مفاهیم پایه فریلنسری آشنا می‌شوید، نحوه ساخت پروفایل حرفه‌ای در پلتفرم‌های بین‌المللی را یاد می‌گیرید و تکنیک‌های گرفتن پروژه‌های دلاری را مرور می‌کنید. همچنین با نحوه نوشتن پروپوزال موثر و جذب کارفرمای خارجی آشنا خواهید شد.",
        tags: [
          "پروفایل فریلنسری حرفه‌ای",
          "Upwork و Freelancer",
          "نوشتن پروپوزال موثر",
          "مدیریت پروژه بین‌المللی",
          "قیمت‌گذاری دلاری",
        ],
      },
    },
    {
      title: "آموزش جامع فروش محصول دیجیتال",
      number: "10",
      time: "۲ ساعت ۵۸ دقیقه",
      children: {
        description:
          "تو این بخش شما یاد می‌گیرید چطور محصولات دیجیتالی مثل قالب، پلاگین، فایل‌های گرافیکی یا آموزشی رو بسازید، مارکت‌های جهانی مثل Gumroad و Etsy رو بشناسید و فروش موفقی توی این پلتفرم‌ها داشته باشید.",
        tags: [
          "ساخت محصول دیجیتال",
          "پلتفرم‌های فروش بین‌المللی",
          "مارکتینگ برای محصولات دیجیتال",
          "بهینه‌سازی صفحه فروش",
          "نحوه قیمت‌گذاری محصولات",
        ],
      },
    },
    {
      title: "مبانی دیجیتال مارکتینگ برای بازارهای خارجی",
      number: "9",
      time: "۴ ساعت ۵ دقیقه",
      children: {
        description:
          "در این فصل شما با اصول بازاریابی دیجیتال برای مخاطبان بین‌المللی آشنا می‌شوید. مباحثی مثل SEO بین‌المللی، تبلیغات در گوگل، استراتژی تولید محتوا و تحلیل رفتار کاربران خارجی آموزش داده می‌شود.",
        tags: [
          "دیجیتال مارکتینگ بین‌المللی",
          "تبلیغات گوگل برای خارجی‌ها",
          "استراتژی محتوا",
          "SEO چندزبانه",
          "تحلیل رفتار کاربر",
        ],
      },
    },
    {
      title: "آموزش کار با پلتفرم‌های همکاری از راه دور",
      number: "6",
      time: "۲ ساعت ۱۲ دقیقه",
      children: {
        description:
          "در این فصل با ابزارها و پلتفرم‌های حرفه‌ای برای همکاری از راه دور مثل Slack، Trello، Notion و Zoom آشنا می‌شوید و یاد می‌گیرید چطور در تیم‌های بین‌المللی به صورت کارآمد فعالیت کنید.",
        tags: [
          "مدیریت پروژه با Trello",
          "ارتباط تیمی با Slack",
          "مستندسازی با Notion",
          "جلسات آنلاین با Zoom",
          "مدیریت زمان در پروژه‌های بین‌المللی",
        ],
      },
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? data : data.slice(0, 3);

  const AccordionItem = ({ title, number, time, children, index }) => {
    const isOpen = openIndex === index;

    const handleToggle = () => {
      setOpenIndex(isOpen ? null : index);
    };

    return (
      <div className="bg-white w-full my-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col items-start justify-between">
        <button
          onClick={handleToggle}
          className="w-full h-full py-4 px-2 sm:px-6 flex flex-wrap justify-between items-center focus:outline-none"
        >
          <div
            className={`w-5/6 flex flex-col items-start space-y-2 lg:flex-row lg:items-center lg:justify-between ${
              isOpen && "border-b-2 border-dotted border-secondary/50 pb-4 pt-2"
            }`}
          >
            <span className="sm:text-lg text-primary flex gap-1 items-start line-clamp-1">
              <FaLightbulb
                size={20}
                className="text-secondary -translate-y-1 mt-1"
              />
              <span className="font-semibold drop-shadow-[0_0_4px_rgba(0,0,0,0.3)] text-start">
                {title}
              </span>
            </span>

            <span className="sm:text-lg flex gap-1 items-start line-clamp-1 text-start">
              <HiMiniDocument size={20} className="text-secondary " />
              <span className="font-semibold drop-shadow-[0_0_4px_rgba(0,0,0,0.3)]">
                تعداد جلسات :
                <span className="text-forground mr-2">{number} جلسه</span>
              </span>
            </span>

            <span className="sm:text-lg flex gap-1 items-start font-semibold line-clamp-1 text-start">
              <IoTimeSharp size={20} className="text-secondary " />
              <span className="drop-shadow-[0_0_4px_rgba(0,0,0,0.3)]">
                مدت زمان :<span className="text-forground mr-1">{time}</span>
              </span>
            </span>
          </div>

          <div className="relative">
            <TiArrowSortedDown
              size={36}
              className={`text-secondary/60 ${isOpen && "rotate-180"}`}
            />
            <TiArrowSortedDown
              size={18}
              className={`absolute text-secondary ${
                isOpen
                  ? "rotate-180 top-[11px] left-[5px]"
                  : "top-[6px] left-[5px]"
              }`}
            />
          </div>
        </button>

        <div
          className={`sm:px-6 px-2 pb-4 text-forground transition-opacity duration-200 ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <p className="text-start leading-7">{children.description}</p>
          <ul className="flex flex-col flex-wrap items-start text-start space-y-2 list-disc list-inside mt-2">
            {children?.tags?.map((tag, key) => (
              <li key={key}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-24 container px-4">
      <h2 className="text-4xl font-bold mb-12">سرفصل های دوره</h2>

      {visibleData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          number={item.number}
          time={item.time}
        >
          {{
            description: item.children.description,
            tags: item.children.tags,
          }}
        </AccordionItem>
      ))}

      {!showAll && data.length > 3 && (
        <div className="mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="font-bold text-secondary text-lg cursor-pointer"
          >
            نمایش ادامه سر فصل ها
            <div className="relative flex flex-col items-center justify-center">
              <TiArrowSortedDown size={36} className="text-secondary/60" />
              <TiArrowSortedDown
                size={18}
                className="absolute text-secondary top-[6.5px] left-[68px]"
              />
            </div>
          </button>
        </div>
      )}
    </section>
  );
}
