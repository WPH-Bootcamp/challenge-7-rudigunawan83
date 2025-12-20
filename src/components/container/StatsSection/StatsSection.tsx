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

/* ================= SECTION ================= */

const StatsSection = () => {
  return (
    <section
      className="
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
      "
    >
      {/* ===== MAIN CONTAINER ===== */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          py-[80px]
          px-6
          md:px-12
          lg:px-[140px]
          flex flex-col
          gap-[48px]
          lg:gap-[64px]
          text-center
        "
      >
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-4xl font-bold">
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
            From strategy to execution, we deliver solutions that grow your business.
          </p>
        </div>

        {/* ================= STATS GRID ================= */}
        <div
          className="
            grid grid-cols-2
            gap-6
            justify-items-center
            sm:gap-8
            lg:grid-cols-4
            lg:gap-10
          "
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} index={i} {...stat} />
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
  index: number;
};

const StatCard = ({
  value,
  suffix = "",
  label,
  index,
}: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [pulse, setPulse] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start(prefersReduced);
        else stop();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      stop();
    };
  }, []);

  const start = (reduced: boolean) => {
    if (intervalRef.current !== null) return;

    const isMobile = window.innerWidth < 768;
    const delay = (isMobile ? 80 : 120) * index;

    setTimeout(() => {
      animate(reduced);
      intervalRef.current = window.setInterval(
        () => animate(reduced),
        5000
      );
    }, delay);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const animate = (reduced: boolean) => {
    setPulse(false);
    setCount(0);

    if (reduced) {
      setCount(value);
      setPulse(true);
      return;
    }

    const duration = 1100;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setPulse(true);
        setTimeout(() => setPulse(false), 450);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  };

  return (
    <div
      ref={ref}
      className={`
        relative
        flex flex-col items-center justify-center
        text-center
        gap-[6px]
        w-[172px] h-[172px]
        lg:w-[275px] lg:h-[275px]
        rounded-full
        transition-transform duration-300
        ${pulse ? "scale-[1.04]" : "scale-100"}

        bg-neutral-100 dark:bg-[#0A0D12]
        border border-neutral-200 dark:border-[#181D27]
      `}
    >
      {/* VALUE */}
      <span className="font-display text-[28px] lg:text-[40px] font-bold text-orange-500">
        {count}
        {suffix}
      </span>

      {/* LABEL */}
      <span className="font-quicksand text-xs lg:text-sm font-medium text-neutral-600 dark:text-neutral-400 px-2 lg:px-6">
        {label}
      </span>
    </div>
  );
};

/* ================= UTILS ================= */

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
