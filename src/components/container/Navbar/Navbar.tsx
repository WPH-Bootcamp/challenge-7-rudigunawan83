import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../../ui/Button";

const NAV_OFFSET = 84; // tinggi navbar sesuai desain

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10">
        <div
          className="
            max-w-[1440px]
            h-[84px]
            mx-auto
            px-4
            lg:px-[140px]
            flex
            items-center
            justify-between
          "
        >
          {/* LOGO */}
          <div
            className="flex items-center gap-2 text-white font-semibold cursor-pointer"
            onClick={scrollToTop}
          >
            <img
              src="/logo-symbol.png"
              alt="Company Logo"
              className="h-8 w-auto"
            />
            Your Logo
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex gap-10 text-sm text-neutral-300">
            <button onClick={() => scrollToSection("hero")} className="hover:text-white">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="hover:text-white">
              Service
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="hover:text-white">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="hover:text-white">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-white">
              FAQ
            </button>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Button
              className="px-6 py-2 text-sm"
              onClick={() => scrollToSection("contact")}
            >
              Let's Talk
            </Button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-[60] bg-black transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}`}
      >
        {/* Overlay Header */}
        <div className="h-[84px] px-6 flex items-center justify-between border-b border-white/10">
          <div
            className="flex items-center gap-2 text-white font-semibold cursor-pointer"
            onClick={scrollToTop}
          >
            <img
              src="/logo-symbol.png"
              alt="Company Logo"
              className="h-7 w-auto"
            />
            Your Logo
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-orange-400 transition"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Overlay Menu */}
        <nav className="px-6 py-10 space-y-6 text-sm text-neutral-300">
          <button onClick={() => scrollToSection("hero")} className="block w-full text-left">
            About
          </button>
          <button onClick={() => scrollToSection("services")} className="block w-full text-left">
            Service
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="block w-full text-left">
            Portfolio
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left">
            Testimonials
          </button>
          <button onClick={() => scrollToSection("faq")} className="block w-full text-left">
            FAQ
          </button>

          <Button
            className="w-full mt-10 py-4"
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
