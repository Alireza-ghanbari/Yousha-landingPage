import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

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
      <nav className="max-md:px-8 px-0">
        {/* desktop */}
        <div className="hidden lg:flex items-center justify-between py-8">
          <img src="/icon.png" alt="logo" className="w-24" />
          <div className="space-x-8">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                className="hover:text-black font-semibold text-xl transition-colors drop-shadow-md drop-shadow-primary/20"
              >
                {item.name}
              </a>
            ))}
          </div>
          <a
            className="px-5 py-2 rounded-full bg-secondary text-white text-xl hover:opacity-95 transition-all border border-transparent hover:border-background/40 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            ورود / عضویت
          </a>
        </div>

        {/* mobile */}
        <div className="flex lg:hidden justify-between items-center py-3">
          <img src="/icon.png" alt="logo" className="w-24 select-none" />

          <span
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer text-primary hover:text-black transition-colors z-40"
          >
            {!isMenuOpen ? <IoMdMenu size={32} /> : <IoMdClose size={32} />}
          </span>

          {isMenuOpen && (
            <div className="fixed bg-background/50 backdrop-blur-sm z-30 inset-0 flex flex-col items-center justify-center space-y-8 transition-all duration-300">
              <div className="flex flex-col items-center justify-center space-y-8">
                <img src="/icon.png" alt="logo" className="w-32" />
                {navItems.map((item, key) => (
                  <a
                    href={item.href}
                    key={key}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-semibold hover:text-black transition-colors drop-shadow-md text-xl drop-shadow-primary/20 select-none"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                onClick={() => navigate("/login")}
                className="px-5 py-2 rounded-full bg-secondary text-white hover:opacity-95 transition-all text-xl border border-transparent hover:border-background/40 cursor-pointer"
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
