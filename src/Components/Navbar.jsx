import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "SERVICES", id: "services" },
    { name: "PORTFOLIO", id: "portfolio" },
    { name: "MENU", id: "menu" },
    { name: "CONTACT", id: "contact" },
  ];

  const goHome = () => {
    setMenuOpen(false);
    sessionStorage.setItem("scrollToTop", "true");
    window.location.href = "/";
  };

  const scrollToSection = (id) => {
    const isMobile = window.innerWidth < 768;

    if (id === "home") {
      goHome();
      return;
    }

    if (isMobile) {
      setMenuOpen(false);

      setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;

        const navbarHeight = 76;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });

        setActiveSection(id);
      }, 250);
    } else {
      const el = document.getElementById(id);
      if (!el) return;

      const navbarHeight = 88;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      let currentSection = "home";

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = link.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full font-[Poppins] z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-bg/92 backdrop-blur-md border-b border-black/5 shadow-sm py-3"
          : "bg-bg py-3"
      }`}
    >
      <div className="px-5 sm:px-10 md:px-16 lg:px-14 xl:px-20">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <button
            onClick={goHome}
            className="w-16 sm:w-20 md:w-24 shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <img
              src="/images/logo1-removebg.png"
              alt="Logo"
              className="w-full object-contain"
            />
          </button>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      if (link.id === "home") {
                        goHome();
                      } else {
                        scrollToSection(link.id);
                      }
                    }}
                    className={`relative pb-1 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 ${
                      isActive ? "text-green" : "text-black hover:opacity-80"
                    }`}
                  >
                    {link.name}

                    {/* underline */}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-gold transition-all duration-300 ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* DESKTOP BUTTON */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden lg:inline-flex cursor-pointer bg-green text-gold px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95"
          >
            Contact Now
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 pt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 rounded-2xl bg-white/95 backdrop-blur-sm p-5 shadow-md border border-[#e9e1d8]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.name}
                  onClick={() => {
                    if (link.id === "home") {
                      goHome();
                    } else {
                      scrollToSection(link.id);
                    }
                  }}
                  className={`text-left font-semibold cursor-pointer transition-all duration-300 hover:translate-x-1 ${
                    isActive ? "text-green" : "text-black hover:opacity-80"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:inline-flex mt-2 w-fit cursor-pointer bg-green text-gold px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95"
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
