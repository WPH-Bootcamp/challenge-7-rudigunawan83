import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: StatItem[] = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Industry Awards Won" },
  { value: 100, suffix: "%", label: "Client Satisfaction Rate" },
];
const StatsSection = () => {
  return (
    <section className="bg-black">
      {/* ===== MAIN CONTAINER ===== */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          py-20
          px-4
          flex flex-col
          gap-6
          text-center

          lg:px-[140px]
          lg:gap-16
        "
      >
        {/* TITLE */}
        <div>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white">
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
            From strategy to execution, we deliver solutions that grow your business.
          </p>
        </div>

        {/* STATS */}
        <div
          className="
            grid grid-cols-2
            gap-6
            justify-items-center

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
const StatCard = ({
  value,
  suffix = "",
  label,
  index = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  index?: number;
}) => {
  const [count, setCount] = useState(0);
  const [pulse, setPulse] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startLoop(prefersReduced);
        else stopLoop();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      stopLoop();
    };
  }, []);

  const startLoop = (reduced: boolean) => {
    if (intervalRef.current !== null) return;

    const isMobile = window.innerWidth < 768;
    const stagger = (isMobile ? 80 : 120) * index;

    setTimeout(() => {
      runAnimation(reduced);
      intervalRef.current = window.setInterval(
        () => runAnimation(reduced),
        5000
      );
    }, stagger);
  };

  const stopLoop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const runAnimation = (reduced: boolean) => {
    setPulse(false);
    setCount(0);

    if (reduced) {
      setCount(value);
      setPulse(true);
      return;
    }

    const duration = 1100;
    const start = performance.now();

    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(p);
      setCount(Math.floor(eased * value));

      if (p < 1) {
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
        flex flex-col items-center justify-center text-center
        gap-[6px] p-4

        w-[172.5px] h-[172.5px]
        rounded-full
        bg-[#0A0D12]
        border border-[#181D27]

        transition-transform
        ${pulse ? "scale-[1.04]" : "scale-100"}

        lg:w-[275px] lg:h-[275px] lg:gap-2
      `}
    >
      {/* VALUE */}
      <span className="font-display text-[28px] lg:text-[40px] font-bold text-orange-500">
        {count}
        {suffix}
      </span>

      {/* LABEL */}
      <span className="font-quicksand text-xs lg:text-sm font-medium text-neutral-400 px-2 lg:px-6">
        {label}
      </span>
    </div>
  );
};

/* easing */
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
