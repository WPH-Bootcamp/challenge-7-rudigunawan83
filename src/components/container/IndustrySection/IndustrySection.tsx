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
      "Powerful e-commerce platforms with seamless payments, high performance, and scalable architecture to support business growth.",
    image: "/industry-ecommerce.jpg",
  },
  {
    key: "healthcare",
    title: "Healthcare",
    description:
      "Secure healthcare systems that comply with regulations and improve patient experience through digital transformation.",
    image: "/industry-healthcare.jpg",
  },
];

const IndustrySection = () => {
  const [active, setActive] = useState<Industry>(industries[0]);

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Built for Your Industry
        </h2>
        <p className="text-neutral-400 max-w-2xl mt-4">
          We've helped companies across industries launch smarter, faster, and
          more securely.
        </p>

        {/* Content */}
        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Tabs */}
          <div>
            <ul className="space-y-4">
              {industries.map((industry) => (
                <li
                  key={industry.key}
                  onClick={() => setActive(industry)}
                  className={`cursor-pointer pl-4 border-l-2 transition-all duration-300 ${
                    active.key === industry.key
                      ? "border-orange-500 text-white"
                      : "border-neutral-700 text-neutral-500 hover:text-white"
                  }`}
                >
                  {industry.title}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-neutral-400 max-w-lg">
              {active.description}
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={active.image}
              alt={active.title}
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
