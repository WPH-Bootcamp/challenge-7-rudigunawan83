import { useState } from "react";

/* ================= TYPES ================= */

type FaqItem = {
  question: string;
  answer: string;
};

/* ================= DATA ================= */

const faqs: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
  },
  {
    question: "How do I know if this is right for my business?",
    answer:
      "Book a free consult — we’ll assess your goals and recommend the right approach.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is different. Let’s talk about your needs to get a tailored estimate.",
  },
  {
    question: "How long does it take?",
    answer:
      "Depends on scope — but we always prioritize quality and deadlines.",
  },
  {
    question: "Can I start with a small project first?",
    answer:
      "Absolutely. We often begin with MVPs or pilot projects.",
  },
];

/* ================= SECTION ================= */

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="FAQ"
      className="
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
        w-full
        py-[80px]
        lg:h-[822px]
        scroll-mt-[84px]
      "
    >
      {/* ===== MAIN CONTAINER ===== */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-6
          md:px-12
          lg:px-[120px]
          flex
          flex-col
          gap-[48px]
        "
      >
        {/* ================= HEADER ================= */}
        <div>
          <div
            className="
              flex flex-col gap-6
              lg:flex-row lg:items-start lg:justify-between
            "
          >
            <h2
              className="
                font-display font-bold leading-tight
                text-3xl md:text-4xl
              "
            >
              Need Help? Start <br className="hidden sm:block" /> Here.
            </h2>

            <p
              className="
                font-quicksand font-medium text-lg leading-relaxed
                text-neutral-600 dark:text-neutral-400
                max-w-[320px]
                lg:text-right
              "
            >
              Everything you need to know — all in one place.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="mt-8 w-full h-px bg-neutral-200 dark:bg-neutral-800 transition-colors" />
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-[48px]
            flex-1
          "
        >
          {/* ===== LEFT – FAQ LIST ===== */}
          <div className="lg:col-span-2">
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800 transition-colors">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div key={faq.question} className="py-6">
                    <button
                      onClick={() =>
                        setActiveIndex(isOpen ? null : index)
                      }
                      className="
                        w-full flex justify-between items-center text-left
                        transition-colors
                      "
                    >
                      <span className="font-medium text-neutral-900 dark:text-white">
                        {faq.question}
                      </span>

                      <span className="text-xl text-neutral-500 dark:text-neutral-400">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <p className="mt-4 text-sm max-w-xl text-neutral-600 dark:text-neutral-400">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== RIGHT – CTA CARD ===== */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                w-full
                max-w-[329px]
                rounded-[24px]
                p-6
                flex flex-col gap-6
                bg-[#CC4E32]
                text-white
                shadow-lg
              "
            >
              {/* TEXT */}
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-2xl font-bold leading-snug">
                  Let’s talk it <br /> through
                </h3>

                <p className="text-sm text-white/90">
                  Book a free consultation with <br /> our team.
                </p>
              </div>

              {/* IMAGE */}
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src="/consultation.jpg"
                  alt="Consultation"
                  className="w-full h-[153px] object-cover"
                />
              </div>

              {/* BUTTON */}
              <button
                className="
                  mt-auto
                  w-full h-[44px]
                  rounded-full
                  bg-white text-black
                  text-sm font-semibold
                  hover:bg-neutral-200
                  transition
                "
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
