import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Button from "../../ui/Button";

const NAV_OFFSET = 84;
type Theme = "light" | "dark";

const MENU = [
  { label: "About", target: "hero" },
  { label: "Service", target: "service" },
  { label: "Projects", target: "projects" },
  { label: "Testimonials", target: "testimonials" },
  { label: "FAQ", target: "faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [scrolled, setScrolled] = useState(false);

  /* ================= INIT THEME ================= */
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(stored ?? (prefersDark ? "dark" : "light"));
  }, []);

  /* ================= APPLY THEME ================= */
  useEffect(() => {
    const root = document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* ================= SCROLL LISTENER ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= TOGGLE THEME ================= */
  const toggleTheme = () =>
    setTheme((p) => (p === "dark" ? "light" : "dark"));

  /* ================= SCROLL TO SECTION ================= */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

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
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${
            scrolled
              ? `
                backdrop-blur-xl
                bg-white/70 dark:bg-black/70
                border-b border-black/10 dark:border-white/10
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
              `
              : `
                backdrop-blur-xl
                bg-white/50 dark:bg-black/50
                border-b border-black/5 dark:border-white/10
              `
          }
        `}
      >
        <div className="
          max-w-[1440px]
          h-[84px]
          mx-auto
          px-6 md:px-12 lg:px-[140px]
          flex items-center justify-between
        ">
          {/* LOGO */}
          <div
            onClick={scrollToTop}
            className="
              flex items-center gap-2
              cursor-pointer
              font-bold
              text-black dark:text-white
            "
          >
            <img src="/logo-symbol.png" alt="Logo" className="h-8 w-auto" />
            Your Logo
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden lg:flex gap-2 text-sm">
            {MENU.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="
                  px-4 py-2 rounded-full
                  font-bold
                  text-black dark:text-white
                  transition-all duration-300
                  hover:bg-black/5 dark:hover:bg-white/10
                "
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* ================= DESKTOP ACTIONS ================= */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <Button className="px-6 py-2 text-sm font-bold">
              Let&apos;s Talk
            </Button>
          </div>

          {/* ================= MOBILE ACTIONS ================= */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              onClick={() => setOpen(true)}
              className="text-black dark:text-white"
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
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="h-[84px] px-6 flex items-center justify-between border-b border-black/10 dark:border-white/10">
          <div
            onClick={scrollToTop}
            className="flex items-center gap-2 font-bold cursor-pointer text-black dark:text-white"
          >
            <img src="/logo-symbol.png" alt="Logo" className="h-7 w-auto" />
            Your Logo
          </div>

          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6 text-black dark:text-white" />
          </button>
        </div>

        <nav className="px-6 py-10 space-y-6 text-sm">
          {MENU.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="
                block w-full text-left
                font-bold
                text-black dark:text-white
                hover:opacity-80
                transition
              "
            >
              {item.label}
            </button>
          ))}

          <Button className="w-full mt-8 py-4 font-bold">
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
      className="
        w-9 h-9 rounded-full
        flex items-center justify-center
        border border-black/20 dark:border-white/20
        bg-white/80 dark:bg-black/70
        text-black dark:text-white
        hover:bg-black/10 dark:hover:bg-white/10
        transition
      "
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
