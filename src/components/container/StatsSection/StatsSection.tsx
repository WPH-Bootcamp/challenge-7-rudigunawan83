import { useEffect, useRef, useState } from "react";

/* ================= TYPES ================= */

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

/* ================= DATA ================= */

const stats: StatItem[] = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Industry Awards Won" },
  { value: 100, suffix: "%", label: "Client Satisfaction Rate" },
];

/* ================= CONSTANTS ================= */

const DURATION = 1200;
const LOOP_DELAY = 3000;

/* ================= SECTION ================= */

const StatsSection = () => {
  const [tick, setTick] = useState(0);
  const [pulse, setPulse] = useState(false);
  const started = useRef(false);
  const intervalRef = useRef<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          run(prefersReduced);
          intervalRef.current = window.setInterval(
            () => run(prefersReduced),
            LOOP_DELAY
          );
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const run = (reduced: boolean) => {
    setPulse(false);
    setTick((t) => t + 1);
    setTimeout(() => triggerPulse(), reduced ? 50 : DURATION);
  };

  const triggerPulse = () => {
    setPulse(true);
    setTimeout(() => setPulse(false), 450);
  };

  return (
    <section
      ref={ref}
      className="
        bg-white dark:bg-black
        text-black dark:text-white
        transition-colors duration-300
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          py-[80px]
          px-6 md:px-12 lg:px-[140px]
          flex flex-col
          gap-[64px]
          text-center
        "
      >
        {/* ================= HEADER ================= */}
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold">
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
            From strategy to execution, we deliver solutions that grow your business.
          </p>
        </div>

        {/* ================= STATS WRAPPER ================= */}
        <div
          className="
            mx-auto
            w-full
            max-w-[1160px]
            h-[275px]

            grid grid-cols-2 gap-6
            sm:grid-cols-2 sm:gap-8

            lg:flex
            lg:items-center
            lg:justify-between
            lg:gap-[20px]
          "
        >
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              {...stat}
              tick={tick}
              pulse={pulse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

/* ================= CARD ================= */

type StatCardProps = {
  value: number;
  suffix?: string;
  label: string;
  tick: number;
  pulse: boolean;
};

const StatCard = ({
  value,
  suffix = "",
  label,
  tick,
  pulse,
}: StatCardProps) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setCount(0);

    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      setCount(Math.floor(easeOutCubic(progress) * value));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick, value]);

  return (
    <div
      className={`
        relative
        flex-shrink-0
        flex flex-col items-center justify-center
        text-center

        w-[275px] h-[275px]
        gap-[6px]

        rounded-full
        border border-neutral-200 dark:border-[#181D27]
        bg-neutral-100 dark:bg-[#0A0D12]

        transition-transform duration-300
        ${pulse ? "scale-[1.04]" : "scale-100"}
      `}
    >
      {/* GLOW */}
      <div
        className={`
          pointer-events-none
          absolute inset-0
          rounded-full
          border border-orange-500/40
          blur-md
          transition-opacity duration-300
          ${pulse ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* VALUE */}
      <span className="relative z-10 text-[40px] font-bold text-orange-500 leading-none">
        {count}
        {suffix}
      </span>

      {/* LABEL */}
      <span className="relative z-10 text-sm font-medium text-neutral-600 dark:text-neutral-400 px-6">
        {label}
      </span>
    </div>
  );
};

/* ================= UTILS ================= */

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
