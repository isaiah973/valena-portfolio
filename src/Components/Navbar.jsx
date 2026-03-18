import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-[#F8F6F2] px-5 sm:px-10 md:px-16 lg:px-20 py-4 font-[Poppins] z-50">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="w-20 sm:w-24 md:w-28 md:ml-[-30px] ml-[-20px]">
          <img
            src="/images/logo1-removebg.png"
            alt="Logo"
            className="w-full object-contain"
          />
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-sm lg:text-md font-bold">
          <li className="hover:opacity-80 cursor-pointer text-black transition">
            HOME
          </li>
          <li className="hover:opacity-80 cursor-pointer text-black transition">
            SERVICES
          </li>
          <li className="hover:opacity-80 cursor-pointer text-black transition">
            PORTFOLIO
          </li>
        </ul>

        {/* DESKTOP BUTTON */}
        <button className="hidden lg:block bg-green text-gold px-6 py-3 rounded-full text-sm font-medium hover:bg-amber-50 hover:border hover:border-black hover:text-black transition">
          Contact Now
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 pt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 rounded-2xl bg-white/80 backdrop-blur-sm p-5 shadow-md border border-[#e9e1d8]">
          <li className="list-none hover:opacity-80 cursor-pointer text-black font-semibold transition">
            HOME
          </li>
          <li className="list-none hover:opacity-80 cursor-pointer text-black font-semibold transition">
            SERVICES
          </li>
          <li className="list-none hover:opacity-80 cursor-pointer text-black font-semibold transition">
            PORTFOLIO
          </li>

          <button className="mt-2 w-fit bg-green text-gold px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
            Contact Now
          </button>
        </div>
      </div>
    </nav>
  );
}
