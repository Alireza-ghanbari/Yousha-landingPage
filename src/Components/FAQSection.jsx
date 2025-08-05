import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

export default function FAQSection() {
  const data = [
    {
      title: "چگونه میتوانم با پشتیبانی ارتباط داشته باشم؟",
      description:
        "زمانی که شما تیکت پشتیبانی ارسال می کنید ، کارشناسان انجمن موظف هستند در اولویت اول ابتدا تیکت‌های کاربران را بررسی کنند و به سوالات کاربران پاسخ دهند و مشکلات کاربران را پیگیری کنند. تیکت‌ها نسبت به سایر روش‌های ارتباطی مثل تلفن ، ایمیل اولویت بالاتری دارد .",
    },
    {
      title: "چگونه رمز عبور خود را بازیابی کنم؟",
      description:
        "در صورتی که رمز عبور خود را فراموش کرده‌اید، می‌توانید از طریق گزینه «رمز عبور را فراموش کرده‌ام» در صفحه ورود اقدام کنید. پس از وارد کردن ایمیل یا شماره همراه ثبت‌شده، لینک بازیابی برای شما ارسال خواهد شد.",
    },
    {
      title: "آیا می‌توانم حساب کاربری خود را حذف کنم؟",
      description:
        "بله، در صورتی که دیگر نیازی به استفاده از خدمات ما ندارید، می‌توانید از طریق بخش تنظیمات حساب، درخواست حذف حساب کاربری خود را ثبت کنید. پس از بررسی، حساب شما به صورت کامل حذف خواهد شد و امکان بازیابی آن وجود نخواهد داشت.",
    },
    {
      title: "چه مدت زمان می‌برد تا به تیکت من پاسخ داده شود؟",
      description:
        "پاسخ‌گویی به تیکت‌ها معمولاً بین ۲ تا ۲۴ ساعت کاری زمان می‌برد. تیم پشتیبانی تلاش می‌کند تا در سریع‌ترین زمان ممکن به سوالات و مشکلات کاربران رسیدگی کند. لطفاً در صورت ارسال تیکت، از ارسال پیام‌های تکراری خودداری کنید.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const AccordionItem = ({ title, children, index }) => {
    const isOpen = openIndex === index;

    const handleToggle = () => {
      setOpenIndex(isOpen ? null : index);
    };

    return (
      <div className="bg-white w-full my-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col items-start justify-between">
        <button
          onClick={handleToggle}
          className="w-full h-full py-2 px-2 sm:px-6 flex flex-wrap justify-between items-center focus:outline-none"
        >
          <div
            className={`w-5/6 ${
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
          className={`sm:px-6 px-2 text-forground transition-opacity duration-200 ${
            isOpen
              ? "max-h-screen opacity-100 py-4"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <p className="text-start leading-7">{children}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="w-full py-24 container px-4">
      <h2 className="text-4xl font-bold mb-12">سوالات متداول</h2>
      {data.map((item, index) => (
        <AccordionItem key={index} index={index} title={item.title}>
          {item.description}
        </AccordionItem>
      ))}
    </section>
  );
}
