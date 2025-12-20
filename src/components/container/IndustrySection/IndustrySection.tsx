import { useState } from "react";

type Industry = {
  key: string;
  title: string;
  description: string;
  image: string;
};

const industries: Industry[] = [
  {
    key: "fintech",
    title: "Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: "/industry-fintech.jpg",
  },
  {
    key: "ecommerce",
    title: "E-Commerce",
    description:
      "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    image: "/industry-ecommerce.jpg",
  },
  {
    key: "healthcare",
    title: "Healthcare",
    description:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: "/industry-healthcare.jpg",
  },
];

const IndustrySection = () => {
  const [active, setActive] = useState<Industry>(industries[0]);

  return (
    <section
      id="industry"
      className="
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      {/* ================= OUTER WRAPPER ================= */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-6
          md:px-12
          lg:px-[140px]
          py-[80px]
          flex flex-col
          gap-[64px]
        "
      >
        {/* ================= HEADER ================= */}
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Built for Your Industry
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            We've helped companies across industries launch smarter, faster,
            and more securely.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            w-full
            max-w-[1160px]
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-[320px_1fr]
            gap-[48px]
            lg:gap-[64px]
            items-start
          "
        >
          {/* ================= LEFT — TABS ================= */}
          <ul className="space-y-4">
            {industries.map((industry) => {
              const isActive = active.key === industry.key;

              return (
                <li
                  key={industry.key}
                  onClick={() => setActive(industry)}
                  className={`
                    cursor-pointer
                    pl-6
                    border-l-2
                    transition-all duration-300
                    ${
                      isActive
                        ? "border-[#FF6C37] text-black dark:text-white"
                        : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                    }
                  `}
                >
                  <span className="font-semibold text-lg">
                    {industry.title}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* ================= RIGHT CONTENT ================= */}
          <div
            className="
              w-full
              max-w-[840px]
              flex flex-col
              gap-[20px]
            "
          >
            {/* DESCRIPTION */}
            <p className="leading-relaxed max-w-[720px] text-neutral-700 dark:text-neutral-400">
              {active.description}
            </p>

            {/* IMAGE */}
            <div className="relative w-full h-[240px] sm:h-[320px] lg:h-[435px]">
              <img
                src={active.image}
                alt={active.title}
                className="
                  w-full
                  h-full
                  rounded-2xl
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
