import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../../ui/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-semibold">
            <img
              src="/logo-symbol.png"
              alt="Company Logo"
              className="h-8 w-auto"
            />
            Your Logo
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex gap-10 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Service</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Button size="sm">Let's Talk</Button>
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
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 text-white">
          <div className="flex items-center gap-2 font-semibold">
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
          <a href="#about" className="block">About</a>
          <a href="#services" className="block">Service</a>
          <a href="#portfolio" className="block">Portfolio</a>
          <a href="#testimonials" className="block">Testimonials</a>
          <a href="#faq" className="block">FAQ</a>

          <Button className="w-full mt-10 py-4">
            Let's Talk
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
