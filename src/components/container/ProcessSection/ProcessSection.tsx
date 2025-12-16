import { useState, useRef } from "react";
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

  // refs for auto scroll
  const itemRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const toggle = (id: number) => {
    const next = active === id ? null : id;
    setActive(next);

    // auto scroll after state update
    setTimeout(() => {
      if (next && itemRefs.current[next]) {
        itemRefs.current[next]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 50);
  };

  return (
    <section className="bg-black text-white py-28">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold">Our Process</h2>
          <p className="mt-4 text-sm text-neutral-400 max-w-md mx-auto">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden relative space-y-6 max-w-md mx-auto">
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-neutral-800" />

          {STEPS.map((step) => {
            const isOpen = active === step.id;

            return (
              <div
                key={step.id}
                ref={(el) => {
                  itemRefs.current[step.id] = el;
                }}
                className="relative flex gap-4"
              >
                {/* number */}
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-full bg-orange-500 text-black flex items-center justify-center text-xs font-bold">
                    {step.id}
                  </div>
                </div>

                {/* card */}
                <button
                  onClick={() => toggle(step.id)}
                  className="flex-1 bg-neutral-900 rounded-2xl px-5 py-4 text-left
                  transition hover:bg-neutral-800"
                >
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-400">
                        {step.description}
                      </p>
                    </div>
                    <ChevronUp
                      className={`w-4 h-4 text-neutral-400 transition-transform
                      ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>

                  <div
                    className={`grid transition-all duration-300
                    ${isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs text-neutral-300">
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
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-800" />

          <div className="space-y-24">
            {STEPS.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isOpen = active === step.id;

              return (
                <div
                  key={step.id}
                  ref={(el) => {
                    itemRefs.current[step.id] = el;
                  }}
                  className="relative grid grid-cols-2"
                >
                  {isLeft && (
                    <div className="pr-24 text-right">
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

                  <div className="absolute left-1/2 -translate-x-1/2 top-6">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-black flex items-center justify-center text-sm font-bold">
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
      className="w-full bg-neutral-900 rounded-2xl px-6 py-5 text-left
      transition hover:bg-neutral-800"
    >
      <div className="flex justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">{step.title}</h3>
          <p className="mt-1 text-sm text-neutral-400">
            {step.description}
          </p>
        </div>
        <ChevronUp
          className={`w-5 h-5 text-neutral-400 transition-transform
          ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      <div
        className={`grid transition-all duration-300
        ${isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-neutral-300">
            {step.details}
          </p>
        </div>
      </div>
    </button>
  );
};
