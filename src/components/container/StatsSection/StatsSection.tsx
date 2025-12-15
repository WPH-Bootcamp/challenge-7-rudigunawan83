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
        <section className="bg-black py-28">
            <div className="container mx-auto px-6 text-center">

                {/* TITLE */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    End-to-End IT Solutions That Drive Results
                </h2>
                <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                    From strategy to execution, we deliver solutions that grow your business.
                </p>

                {/* STATS */}
                <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
                    {stats.map((stat, i) => (
                        <StatCircle key={stat.label} index={i} {...stat} />
                    ))}
                </div>


            </div>
        </section>
    );
};

export default StatsSection;

const StatCircle = ({
    value,
    suffix = "",
    label,
    index = 0, // untuk stagger
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
                if (entry.isIntersecting) {
                    startLoop(prefersReduced);
                } else {
                    stopLoop();
                }
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

        // Stagger awal (desktop 120ms, mobile 80ms)
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
            // aksesibilitas: tanpa animasi
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
                // pulse saat selesai
                setPulse(true);
                setTimeout(() => setPulse(false), 450);
            }
        };

        rafRef.current = requestAnimationFrame(step);
    };

    return (
        <div
            ref={ref}
            className={[
                "relative w-44 h-44 md:w-48 md:h-48 rounded-full",
                "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),rgba(0,0,0,0.9))]",
                "flex flex-col items-center justify-center text-center",
                "transition-transform",
                pulse ? "scale-[1.03]" : "scale-100", // micro-bounce
            ].join(" ")}
        >
            {/* glow ring */}
            <span
                className={[
                    "pointer-events-none absolute inset-0 rounded-full",
                    "transition-opacity",
                    pulse
                        ? "opacity-100 shadow-[0_0_22px_rgba(255,132,42,0.45)]"
                        : "opacity-0",
                ].join(" ")}
            />

            <span className="relative text-3xl md:text-4xl font-bold text-orange-500">
                {count}
                {suffix}
            </span>
            <span className="relative mt-3 text-sm text-neutral-400 px-4">
                {label}
            </span>
        </div>
    );
};

/* easing */
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
