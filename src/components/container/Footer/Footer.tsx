import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTiktok,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black pb-10">
            <div className="container mx-auto px-6">

                {/* TOP CARD */}
                <div className="bg-neutral-900 rounded-2xl px-8 py-10 mb-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                        {/* LEFT */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            LET&apos;S DISCUSS <br /> YOUR IDEAS
                        </h3>

                        {/* RIGHT LOGO */}
                        <div className="flex items-center gap-2 text-white font-semibold">
                            <img
                                src="/logo-symbol.png"
                                alt="Company Logo"
                                className="h-8 w-auto"
                            />Your Logo
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="my-8 h-px bg-neutral-800" />

                    {/* BOTTOM */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                        {/* LINKS */}
                        <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-neutral-400">
                            <a href="#about" className="hover:text-white">About</a>
                            <a href="#services" className="hover:text-white">Service</a>
                            <a href="#projects" className="hover:text-white">Projects</a>
                            <a href="#testimonials" className="hover:text-white">Testimonials</a>
                            <a href="#faq" className="hover:text-white">FAQ</a>
                        </nav>

                        {/* SOCIAL */}
                        <div className="flex gap-4">
                            <SocialIcon href="#" icon={<FaFacebookF />} />
                            <SocialIcon href="#" icon={<FaInstagram />} />
                            <SocialIcon href="#" icon={<FaLinkedinIn />} />
                            <SocialIcon href="#" icon={<FaTiktok />} />
                        </div>

                    </div>
                </div>

                {/* COPYRIGHT */}
                <p className="text-center text-xs text-neutral-500">
                    © 2025 Your Company. All rights reserved.
                </p>

            </div>
        </footer>
    );
};

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
        border border-neutral-700
        flex items-center justify-center
        text-neutral-400
        hover:text-white hover:border-neutral-500
        transition
      "
        >
            {icon}
        </a>
    );
};

export default Footer;
