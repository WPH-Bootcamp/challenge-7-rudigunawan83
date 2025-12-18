import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-20">
      {/* ===== OUTER CONTAINER (1440) ===== */}
      <div className="max-w-[1440px] mx-auto px-[140px]">

        {/* ================= TOP CARD ================= */}
        <div
          className="
            w-full
            max-w-[1160px]
            mx-auto
            bg-[#0A0D12]
            border border-[#252B37]
            rounded-[24px]
            p-[40px]
            flex
            flex-col
            gap-[60px]
          "
        >
          {/* ================= TOP ROW ================= */}
          <div className="flex items-start justify-between">
            {/* LEFT TEXT */}
            <h3 className="font-display text-3xl font-bold text-white leading-tight">
              LET&apos;S DISCUSS <br /> YOUR IDEAS
            </h3>

            {/* RIGHT LOGO */}
            <div className="flex items-center gap-2 text-white font-semibold">
              <img
                src="/logo-symbol.png"
                alt="Company Logo"
                className="h-8 w-auto"
              />
              Your Logo
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <div className="w-full h-px bg-[#252B37]" />

          {/* ================= BOTTOM ROW ================= */}
          <div className="flex items-center justify-between">
            {/* LINKS */}
            <nav className="flex gap-8 text-sm text-neutral-400">
              <a href="#about" className="hover:text-white transition">
                About
              </a>
              <a href="#services" className="hover:text-white transition">
                Service
              </a>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
              <a href="#testimonials" className="hover:text-white transition">
                Testimonials
              </a>
              <a href="#faq" className="hover:text-white transition">
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
        <p className="mt-10 text-center text-xs text-neutral-500">
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
        border border-[#252B37]
        flex items-center justify-center
        text-neutral-400
        hover:text-white
        hover:border-neutral-500
        transition
      "
    >
      {icon}
    </a>
  );
};

export default Footer;
