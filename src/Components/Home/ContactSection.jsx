import { FiUser } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineStickyNote2 } from "react-icons/md";
import contact from "../../assets/contact.png";

export default function ContactSection() {
  return (
    <section className="w-full py-24 container px-4">
      <h2 className="text-4xl font-bold mb-12">نیاز به مشاوره تخصصی دارید</h2>

      <div className="w-full flex flex-col-reverse gap-y-12 lg:justify-between lg:items-center lg:flex-row">
        <div className="flex flex-1/2 flex-col items-center">
          <p className="font-bold text-xl mb-8">ثبت درخواست مشاوره رایگان</p>
          <form className="w-full sm:w-3/4 mx-auto flex flex-col items-start space-y-4">
            <label className="flex w-full gap-2 bg-white rounded-md text-lg px-4 py-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <FiUser size={24} className="text-forground" />
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="w-full placeholder:text-forground focus:outline-none"
              />
            </label>
            <label className="flex w-full gap-2 bg-white rounded-md text-lg px-4 py-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.1)] ">
              <MdOutlineEmail size={24} className="text-forground" />
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full placeholder:text-forground focus:outline-none"
              />
            </label>
            <label className="flex w-full gap-2 bg-white rounded-md text-lg px-4 py-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <MdOutlineStickyNote2 size={24} className="text-forground" />
              <textarea
                type="text"
                placeholder="توضیحات بیشتر ..."
                className="w-full placeholder:text-forground focus:outline-none resize-none"
                rows={4}
              />
            </label>

            <button
              className="py-2 w-full mt-2 rounded-full bg-secondary text-white text-xl hover:opacity-95 transition-all border border-transparent hover:border-background/40 cursor-pointer"
              disabled
            >
              ثبت درخواست
            </button>
          </form>
        </div>

        <div className="flex flex-1/2 items-center justify-center">
          <img
            src={contact}
            alt="contact"
            className="object-cover w-3/4 sm:w-2/3"
          />
        </div>
      </div>
    </section>
  );
}
