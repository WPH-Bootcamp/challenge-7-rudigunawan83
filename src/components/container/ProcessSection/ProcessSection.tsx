import { useState } from "react";
import { ChevronUp } from "lucide-react";

type Step = {
  id: number;
  title: string;
  description: string;
  details: string;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Discovery & Consultation",
    description: "Understand Your Needs & Goals",
    details:
      "We begin by understanding your business challenges, goals, and requirements.",
  },
  {
    id: 2,
    title: "Planning & Strategy",
    description: "Build a Clear, Scalable Roadmap",
    details:
      "We define scope, milestones, and a scalable technical strategy.",
  },
  {
    id: 3,
    title: "Design & Prototyping",
    description: "Craft UX That Converts",
    details:
      "Our designers craft intuitive UX and interactive prototypes.",
  },
  {
    id: 4,
    title: "Development & Implementation",
    description: "Deliver With Speed & Precision",
    details:
      "We develop secure, high-performance applications.",
  },
  {
    id: 5,
    title: "Testing & Optimization",
    description: "Ensure Quality at Every Step",
    details:
      "We test thoroughly to ensure stability and quality.",
  },
  {
    id: 6,
    title: "Launch & Growth",
    description: "Scale, Measure & Improve Continuously",
    details:
      "We monitor, measure, and continuously improve the product.",
  },
];

const ProcessSection = () => {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      {/* ===== WRAPPER ===== */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-6
          lg:px-[140px]
          py-[80px]
        "
      >
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Our Process
          </h2>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden relative space-y-6 max-w-md mx-auto">
          <div className="absolute left-[24px] top-[24px] bottom-[24px] w-px bg-neutral-300 dark:bg-neutral-800" />

          {STEPS.map((step) => {
            const isOpen = active === step.id;

            return (
              <div key={step.id} className="relative flex gap-4">
                {/* NUMBER */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#FF623E] text-black flex items-center justify-center text-sm font-semibold">
                    {step.id}
                  </div>
                </div>

                {/* CARD */}
                <button
                  onClick={() => toggle(step.id)}
                  className="
                    flex-1
                    rounded-2xl
                    px-5 py-4
                    text-left
                    transition
                    bg-neutral-100 dark:bg-[#0A0D12]
                    hover:bg-neutral-200 dark:hover:bg-neutral-800
                  "
                >
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                        {step.description}
                      </p>
                    </div>

                    <ChevronUp
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs text-neutral-600 dark:text-neutral-300">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 top-[44px] bottom-[44px] w-px bg-neutral-300 dark:bg-neutral-800" />

          <div className="space-y-16">
            {STEPS.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isOpen = active === step.id;

              return (
                <div key={step.id} className="relative grid grid-cols-2">
                  {isLeft && (
                    <div className="pr-24 flex justify-end">
                      <AccordionCard
                        step={step}
                        isOpen={isOpen}
                        onClick={toggle}
                      />
                    </div>
                  )}

                  {!isLeft && (
                    <div className="col-start-2 pl-24">
                      <AccordionCard
                        step={step}
                        isOpen={isOpen}
                        onClick={toggle}
                      />
                    </div>
                  )}

                  {/* NUMBER */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-6 z-10">
                    <div className="w-10 h-10 rounded-full bg-[#FF623E] text-black flex items-center justify-center text-sm font-semibold">
                      {step.id}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

/* ================= CARD ================= */

type CardProps = {
  step: Step;
  isOpen: boolean;
  onClick: (id: number) => void;
};

const AccordionCard = ({ step, isOpen, onClick }: CardProps) => {
  return (
    <button
      onClick={() => onClick(step.id)}
      className="
        w-full max-w-[532px]
        rounded-2xl p-6 text-left
        transition
        bg-neutral-100 dark:bg-[#0A0D12]
        border border-neutral-200 dark:border-[#181D27]
        hover:border-neutral-400 dark:hover:border-neutral-700
      "
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-base font-semibold">
            {step.title}
          </h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {step.description}
          </p>
        </div>

        <ChevronUp
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            {step.details}
          </p>
        </div>
      </div>
    </button>
  );
};
