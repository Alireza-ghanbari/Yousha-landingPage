import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const navItems = [
    { name: " صحفه اصلی ", href: "#hero" },
    { name: " درآمد ارزی ", href: "#cash" },
    { name: " فریلنسری ", href: "#freelancer" },
    { name: " بلاگ ", href: "#blog" },
    { name: " درباره ما ", href: "#about" },
    { name: " تماس با ما ", href: "#contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <div className="w-full container">
      <nav>
        {/* desktop */}
        <div className="hidden lg:flex items-center justify-between py-3">
          <img src="/icon.png" alt="logo" className="w-20" />
          <div className="space-x-8">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                className="font-semibold hover:text-black transition-colors drop-shadow-md drop-shadow-primary/20"
              >
                {item.name}
              </a>
            ))}
          </div>
          <a
            href="#"
            className="px-5 py-2 rounded-full bg-secondary text-white font-semibold hover:opacity-95 transition-all border border-transparent hover:border-background/40"
          >
            ورود / عضویت
          </a>
        </div>

        {/* mobile */}
        <div className="flex lg:hidden justify-between items-center py-3">
          <img src="/icon.png" alt="logo" className="w-20 select-none" />

          <span
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer text-primary hover:text-black transition-colors z-40"
          >
            {!isMenuOpen ? <IoMdMenu size={28} /> : <IoMdClose size={28} />}
          </span>

          {isMenuOpen && (
            <div className="fixed bg-background/50 backdrop-blur-sm z-30 inset-0 flex flex-col items-center justify-center space-y-8 transition-all duration-300">
              <div className="flex flex-col items-center justify-center space-y-8">
                {navItems.map((item, key) => (
                  <a
                    href={item.href}
                    key={key}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-semibold hover:text-black transition-colors drop-shadow-md drop-shadow-primary/20 select-none"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="px-5 py-2 rounded-full bg-secondary text-white font-semibold hover:opacity-95 transition-all border border-transparent hover:border-background/40"
              >
                ورود / عضویت
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
