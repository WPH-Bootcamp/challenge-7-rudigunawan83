type ProcessStep = {
  title: string;
  description: string;
};

const steps: ProcessStep[] = [
  {
    title: "Discovery & Consultation",
    description: "Understand Your Needs & Goals",
  },
  {
    title: "Planning & Strategy",
    description: "Build a Clear, Scalable Roadmap",
  },
  {
    title: "Design & Prototyping",
    description: "Craft UX That Converts",
  },
  {
    title: "Development & Implementation",
    description: "Deliver With Speed & Precision",
  },
  {
    title: "Testing & Optimization",
    description: "Ensure Quality at Every Step",
  },
  {
    title: "Launch & Growth",
    description: "Scale, Measure & Improve Continuously",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-black py-28">
      <div className="container mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Process
          </h2>
          <p className="mt-4 text-neutral-400">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-neutral-800 -translate-x-1/2" />

          <div className="space-y-14">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-center"
                >
                  {/* LEFT CARD */}
                  {isLeft && (
                    <div className="md:pr-12">
                      <ProcessCard {...step} />
                    </div>
                  )}

                  {/* NUMBER */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="
                                            w-10 h-10
                                            rounded-full
                                            bg-orange-500
                                            flex items-center justify-center
                                            "
                    >
                      <span
                        className="
                            text-sm
                            font-bold       
                            text-white
                            drop-shadow-[0_0_4px_rgba(255,255,255,0.7)]
                        "
                      >
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT CARD */}
                  {!isLeft && (
                    <div className="md:pl-12 md:col-start-2">
                      <ProcessCard {...step} />
                    </div>
                  )}
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

/* CARD COMPONENT */
const ProcessCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 shadow-lg flex items-center justify-between">
      <div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-neutral-400">{description}</p>
      </div>

      {/* Arrow */}
      <span className="text-neutral-500 text-xl">⌃</span>
    </div>
  );
};
