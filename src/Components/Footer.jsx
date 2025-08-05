import enamad from "../assets/enamad.webp";

export default function Footer() {
  return (
    <footer className="bg-[#0E1525] text-white">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm w-full py-12 container px-4 sm:place-items-center">
        <div>
          <h3 className="font-semibold sm:text-start text-xl mb-4">
            درباره یوشا
          </h3>
          <p className="text-forground leading-6 text-center sm:text-justify pl-6">
            شما قبل از شروع باید نکات آنلاین کسب درآمد را یاد بگیرید. قبل از کسب
            درآمد ارزی در ایران، در نظر داشته باشید، کسب درآمد در اینترنت نیاز
            به صبر و پشتکار است ...
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 sm:place-items-start">
          <div>
            <h3 className="font-semibold sm:text-start text-xl mb-4">
              منو سفارشی
            </h3>
            <ul className="space-y-2 text-forground sm:text-start list-disc list-inside">
              <li>صفحه اصلی</li>
              <li>دسته بندی</li>
              <li>محصولات</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold sm:text-start text-xl mb-4">
              درباره ما
            </h3>
            <ul className="space-y-2 text-forground sm:text-start list-disc list-inside">
              <li>تماس با ما</li>
              <li>قوانین</li>
              <li>گزارش</li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-semibold sm:text-start text-xl mb-4">
              نماد ها
            </h3>
            <div className=" flex flex-col gap-y-1 items-center sm:items-start">
              <img
                src={enamad}
                alt="enamad"
                className="w-18 h-18 rounded-lg bg-background p-1"
              />
              <p className="text-sm text-forground">نماد الکترونیکی</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-forground py-8">
        تمامی حقوق این وبسایت متعلق به نمایندگی یوشا می‌باشد.
      </div>
    </footer>
  );
}
