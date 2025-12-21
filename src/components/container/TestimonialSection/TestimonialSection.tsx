import { useEffect, useRef, useState } from "react";

/* ================= TYPES ================= */

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};

/* ================= DATA ================= */

const DATA: Testimonial[] = [
  {
    quote:
      "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
    avatar: "/testimonials/sarah.png",
    rating: 5,
  },
  {
    quote:
      "They were a game-changer for our project. The collaboration was seamless and the results exceeded expectations.",
    name: "John Lee",
    role: "CTO at Innovate Corp",
    avatar: "/testimonials/john.png",
    rating: 5,
  },
  {
    quote:
      "Professional, reliable, and incredibly skilled. We couldn’t be happier with the final product.",
    name: "Emily Chen",
    role: "Marketing Head at BrightLabs",
    avatar: "/testimonials/emily.png",
    rating: 5,
  },
];

/* ================= LAYOUT CONFIG ================= */

const GAP = 20;
const CARD_WIDTH = 594;

const SWIPE_THRESHOLD = 80;
const items = [...DATA, ...DATA, ...DATA];
const START_INDEX = DATA.length;

/* ================= SECTION ================= */

const TestimonialSection = () => {
  const [index, setIndex] = useState(START_INDEX);
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

  const startX = useRef(0);
  const animating = useRef(false);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    const id = setInterval(() => slideTo(index + 1), 5000);
    return () => clearInterval(id);
  }, [index]);

  /* ================= LOOP FIX ================= */
  useEffect(() => {
    if (index === DATA.length * 2) snapTo(START_INDEX);
    if (index === DATA.length - 1) snapTo(START_INDEX - 1);
  }, [index]);

  const snapTo = (i: number) => {
    animating.current = true;
    setIndex(i);
    requestAnimationFrame(() => (animating.current = false));
  };

  const slideTo = (i: number) => {
    if (animating.current) return;
    animating.current = true;
    setIndex(i);
    setOffset(0);
    setTimeout(() => (animating.current = false), 650);
  };

  /* ================= POINTER ================= */
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setOffset(e.clientX - startX.current);
  };

  const onPointerUp = () => {
    setDragging(false);
    if (offset > SWIPE_THRESHOLD) slideTo(index - 1);
    else if (offset < -SWIPE_THRESHOLD) slideTo(index + 1);
    else setOffset(0);
  };

  return (
    <section
      id="testimonials"
      className="
        w-full
        py-[80px]
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
        scroll-mt-[84px]
        overflow-visible
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-6 md:px-12 lg:px-[140px]
          flex flex-col
          gap-[64px]
          overflow-visible
        "
      >
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What Partners Say About Working With Us
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* SLIDER */}
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1160px]
            h-[292px]
            overflow-visible
            touch-pan-y
          "
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            className={`flex items-center ${
              dragging
                ? ""
                : "transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
            }`}
            style={{
              transform: `translateX(calc(50% - ${
                index * (CARD_WIDTH + GAP) + CARD_WIDTH / 2
              }px + ${offset}px))`,
              gap: GAP,
            }}
          >
            {items.map((item, i) => (
              <TestimonialCard
                key={`${item.name}-${i}`}
                item={item}
                active={i === index}
              />
            ))}
          </div>
        </div>

        {/* BULLETS */}
        <div className="flex justify-center gap-3">
          {DATA.map((_, i) => {
            const real = index % DATA.length;
            return (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === real
                    ? "bg-orange-500 scale-125"
                    : "bg-neutral-400 dark:bg-neutral-600"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

/* ================= CARD ================= */

type CardProps = {
  item: Testimonial;
  active: boolean;
};

const TestimonialCard = ({ item, active }: CardProps) => {
  return (
    <div
      className={`shrink-0 transition-all duration-700 overflow-visible ${
        active ? "opacity-100 scale-100" : "opacity-40 scale-[0.96]"
      }`}
      style={{ width: CARD_WIDTH }}
    >
      {/* GRADIENT BORDER */}
      <div
        className="
          relative
          w-[594px] h-[292px]
          p-[1px]
          rounded-2xl
          overflow-visible
          bg-[linear-gradient(116.18deg,#FF6C37_-22.52%,#181D27_33.35%)]
        "
      >
        {/* CARD */}
        <div
          className="
            relative
            w-full h-full
            rounded-2xl
            bg-neutral-100 dark:bg-[#0A0D12]
            px-6 pt-6 pb-12
            flex flex-col
            items-center
            gap-6
            overflow-visible
          "
        >
          {/* QUOTE ICON */}
          <img
            src="/icons/quote.png"
            alt="Quote"
            className="
              absolute
              -top-[22px]
              left-6
              w-14 h-14
              pointer-events-none
            "
          />

          {/* STARS */}
          <div className="flex gap-1 mt-4">
            {Array.from({ length: item.rating }).map((_, i) => (
              <img
                key={i}
                src="/icons/star.png"
                alt="Star"
                className="w-5 h-5"
              />
            ))}
          </div>

          {/* QUOTE */}
          <p className="font-quicksand font-semibold text-sm leading-relaxed text-center text-neutral-800 dark:text-[#FDFDFD]">
            “{item.quote}”
          </p>

          {/* AUTHOR */}
          <div className="mt-auto text-center">
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-orange-500">{item.role}</p>
          </div>

          {/* AVATAR */}
          <div className="absolute -bottom-[36px] left-1/2 -translate-x-1/2">
            <img
              src={item.avatar}
              alt={item.name}
              className="
                w-16 h-16
                rounded-full
                object-cover
                bg-white dark:bg-black
                border-2 border-neutral-200 dark:border-[#181D27]
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
