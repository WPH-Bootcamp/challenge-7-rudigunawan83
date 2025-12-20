import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Button from "../../ui/Button";

const NAV_OFFSET = 84;

type Theme = "light" | "dark";

const MENU = ["hero", "services", "portfolio", "testimonials", "faq"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  /* ================= INIT THEME ================= */
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(stored ?? (prefersDark ? "dark" : "light"));
  }, []);

  /* ================= APPLY THEME ================= */
  useEffect(() => {
    const root = document.documentElement;
    theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* ================= TOGGLE THEME ================= */
  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"));

  /* ================= SCROLL ================= */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className="
          fixed top-0 left-0 w-full z-50
          bg-white dark:bg-black
          border-b border-neutral-200 dark:border-white/10
          transition-colors duration-300
        "
      >
        <div
          className="
            max-w-[1440px]
            h-[84px]
            mx-auto
            px-6 md:px-12 lg:px-[140px]
            flex items-center justify-between
          "
        >
          {/* LOGO */}
          <div
            onClick={scrollToTop}
            className="flex items-center gap-2 font-semibold cursor-pointer text-black dark:text-white"
          >
            <img src="/logo-symbol.png" alt="Company Logo" className="h-8 w-auto" />
            Your Logo
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex gap-10 text-sm text-neutral-600 dark:text-neutral-300">
            {MENU.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <Button className="px-6 py-2 text-sm" onClick={() => scrollToSection("contact")}>
              Let&apos;s Talk
            </Button>
          </div>

          {/* MOBILE ACTIONS (TOGGLE + MENU) */}
          <div className="lg:hidden flex items-center gap-3">
            {/* MOBILE THEME TOGGLE (HEADER) */}
            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="text-black dark:text-white"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed inset-0 z-[60]
          bg-white dark:bg-black
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* MOBILE HEADER */}
        <div className="h-[84px] px-6 flex items-center justify-between border-b border-neutral-200 dark:border-white/10">
          <div
            onClick={scrollToTop}
            className="flex items-center gap-2 font-semibold cursor-pointer text-black dark:text-white"
          >
            <img src="/logo-symbol.png" alt="Company Logo" className="h-7 w-auto" />
            Your Logo
          </div>

          <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-black dark:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* MOBILE MENU */}
        <nav className="px-6 py-10 space-y-6 text-sm text-neutral-600 dark:text-neutral-300">
          {MENU.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left hover:text-black dark:hover:text-white transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}

          {/* MOBILE THEME TOGGLE (DRAWER) */}
          <button
            onClick={toggleTheme}
            className="
              mt-6 w-full py-3 rounded-full
              border border-neutral-300 dark:border-neutral-700
              flex items-center justify-center gap-2
              text-black dark:text-white
            "
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            Switch Theme
          </button>

          <Button className="w-full mt-6 py-4" onClick={() => scrollToSection("contact")}>
            Let&apos;s Talk
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

/* ================= THEME TOGGLE ================= */
function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="
        relative w-9 h-9 rounded-full
        flex items-center justify-center
        border border-neutral-300 dark:border-neutral-700
        bg-white dark:bg-black
        text-neutral-700 dark:text-neutral-300
        hover:bg-neutral-200 dark:hover:bg-neutral-800
        transition-all duration-300
      "
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
