import { LuLock } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Atropos from "atropos/react";
import "atropos/css";

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen bg-background text-primary flex items-center justify-center px-4 sm:px-0 ">
      <Atropos
        shadow={false}
        rotateXMax={4}
        rotateYMax={4}
        activeOffset={15}
        duration={200}
        className="atropos-container w-full sm:w-2/3 lg:w-2/5 xl:w-1/3"
      >
        <div className="w-full flex flex-col items-center justify-center space-y-4 px-4 py-14 rounded-3xl border-4 border-secondary/80">
          <div className="w-36 h-32 object-cover">
            <img src="/icon.png" alt="logo" />
          </div>
          <h1 className="text-2xl text-forground">به یوشا خوش آمدید</h1>

          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <label className="flex w-full gap-2 bg-white rounded-xl text-lg px-4 py-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <MdOutlineEmail size={24} className="text-forground" />
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full placeholder:text-forground focus:outline-none"
              />
            </label>

            <label className="flex w-full gap-2 bg-white rounded-xl text-lg px-4 py-3 drop-shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <LuLock size={24} className="text-forground" />
              <input
                type="password"
                placeholder="رمز عبور"
                className="w-full placeholder:text-forground focus:outline-none"
              />
            </label>

            <button
              className="py-2 w-full mt-2 rounded-xl bg-secondary text-white text-xl hover:opacity-95 transition-all border border-transparent hover:border-background/40 cursor-pointer active:scale-95"
              type="submit"
            >
              ورود
            </button>
          </form>
        </div>
      </Atropos>
    </div>
  );
}
