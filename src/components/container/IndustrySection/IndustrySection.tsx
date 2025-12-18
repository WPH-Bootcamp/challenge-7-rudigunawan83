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
    <section id="industry" className="bg-black text-white">
      {/* ===== OUTER WRAPPER ===== */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-4
          lg:px-[140px]
          py-[80px]
          flex flex-col
          gap-[64px]
        "
      >
        {/* ===== HEADER ===== */}
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Built for Your Industry
          </h2>
          <p className="mt-4 text-neutral-400">
            We've helped companies across industries launch smarter, faster,
            and more securely.
          </p>
        </div>

        {/* ===== CONTENT CONTAINER ===== */}
        <div
          className="
            w-full
            max-w-[1160px]
            mx-auto
            grid
            lg:grid-cols-[320px_1fr]
            gap-[64px]
            items-start
          "
        >
          {/* LEFT — INDUSTRY TABS */}
          <div className="flex flex-col">
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
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-[#FF6C37] text-white"
                          : "border-neutral-700 text-neutral-500 hover:text-white"
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
          </div>

          {/* ================= RIGHT CONTAINER ================= */}
          <div
            className="
              w-full
              max-w-[840px]
              h-auto
              lg:h-[435px]
              flex
              flex-col
              gap-[20px]
              opacity-100
            "
          >
            {/* DESCRIPTION */}
            <p className="text-neutral-400 leading-relaxed max-w-[720px]">
              {active.description}
            </p>

            {/* IMAGE */}
            <div className="relative flex-1">
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
          {/* =================================================== */}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
