import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        w-full
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
        py-20
      "
    >
      {/* ===== OUTER CONTAINER (1440) ===== */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[140px]">

        {/* ================= TOP CARD ================= */}
        <div
          className="
            w-full
            max-w-[1160px]
            mx-auto
            rounded-[24px]
            p-6
            md:p-10
            flex
            flex-col
            gap-10
            md:gap-[60px]
            bg-white dark:bg-[#0A0D12]
            border border-neutral-200 dark:border-[#252B37]
            transition-colors
          "
        >
          {/* ================= TOP ROW ================= */}
          <div
            className="
              flex
              flex-col
              md:flex-row
              items-start
              md:items-center
              justify-between
              gap-6
            "
          >
            {/* LEFT TEXT */}
            <h3
              className="
                font-display
                text-2xl
                md:text-3xl
                font-bold
                leading-tight
              "
            >
              LET&apos;S DISCUSS <br /> YOUR IDEAS
            </h3>

            {/* RIGHT LOGO */}
            <div className="flex items-center gap-2 font-semibold">
              <img
                src="/logo-symbol.png"
                alt="Company Logo"
                className="h-8 w-auto"
              />
              Your Logo
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <div className="w-full h-px bg-neutral-200 dark:bg-[#252B37]" />

          {/* ================= BOTTOM ROW ================= */}
          <div
            className="
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-6
            "
          >
            {/* LINKS */}
            <nav
              className="
                flex
                flex-wrap
                justify-center
                md:justify-start
                gap-6
                md:gap-8
                text-sm
                text-neutral-600
                dark:text-neutral-400
              "
            >
              <a href="#about" className="hover:text-black dark:hover:text-white transition">
                About
              </a>
              <a href="#services" className="hover:text-black dark:hover:text-white transition">
                Service
              </a>
              <a href="#projects" className="hover:text-black dark:hover:text-white transition">
                Projects
              </a>
              <a href="#testimonials" className="hover:text-black dark:hover:text-white transition">
                Testimonials
              </a>
              <a href="#faq" className="hover:text-black dark:hover:text-white transition">
                FAQ
              </a>
            </nav>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <SocialIcon href="#" icon={<FaFacebookF />} />
              <SocialIcon href="#" icon={<FaInstagram />} />
              <SocialIcon href="#" icon={<FaLinkedinIn />} />
              <SocialIcon href="#" icon={<FaTiktok />} />
            </div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <p className="mt-10 text-center text-xs text-neutral-500 dark:text-neutral-400">
          © 2025 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

/* ================= SOCIAL ICON ================= */

const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-9 h-9
        rounded-full
        flex items-center justify-center
        border
        border-neutral-300 dark:border-[#252B37]
        text-neutral-500 dark:text-neutral-400
        hover:text-black dark:hover:text-white
        hover:border-neutral-400 dark:hover:border-neutral-500
        transition
      "
    >
      {icon}
    </a>
  );
};

export default Footer;
