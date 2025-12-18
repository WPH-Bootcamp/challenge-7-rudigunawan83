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

/* ================= CONFIG ================= */

const CARD_WIDTH = 594;
const GAP = 20;
const SWIPE_THRESHOLD = 80;

const items = [...DATA, ...DATA, ...DATA];
const START_INDEX = DATA.length;

/* ================= SECTION ================= */

export default function TestimonialSection() {
  const [index, setIndex] = useState(START_INDEX);
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

  const startX = useRef(0);
  const animating = useRef(false);

  /* AUTO SLIDE */
  useEffect(() => {
    const id = setInterval(() => slideTo(index + 1), 5000);
    return () => clearInterval(id);
  }, [index]);

  /* LOOP FIX */
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
      bg-black
      w-full
      h-[723px]              /* ⬅ FIX HEIGHT */
      py-[80px]              /* ⬅ TOP & BOTTOM 80 */
      overflow-visible
    "
  >
    {/* ===== MAIN CONTAINER (1440px) ===== */}
    <div
      className="
        max-w-[1440px]
        mx-auto
        px-[140px]
        h-full
        flex
        flex-col
        gap-[80px]            /* ⬅ GAP 80 */
      "
    >
      {/* HEADER */}
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          What Partners Say About Working With Us
        </h2>
        <p className="mt-4 text-neutral-400">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      {/* ===== CARD CONTAINER ===== */}
      <div
        className="
          relative
          w-full
          h-[420px]            /* cukup utk quote + avatar */
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
                  : "bg-neutral-600"
              }`}
            />
          );
        })}
      </div>
    </div>
  </section>
);

}

/* ================= CARD ================= */

function TestimonialCard({
  item,
  active,
}: {
  item: Testimonial;
  active: boolean;
}) {
  return (
    <div
      className={`shrink-0 transition-all duration-700 ${
        active ? "opacity-100 scale-100" : "opacity-40 scale-[0.92]"
      }`}
      style={{ width: CARD_WIDTH }}
    >
      <div
        className="
          relative
          h-[340px]
          bg-[#0A0D12]
          border border-[#181D27]
          rounded-2xl
          px-10
          pt-20
          pb-16
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
            -top-[32px]
            left-10
            w-20 h-20
            z-50
            pointer-events-none
            drop-shadow-[0_16px_40px_rgba(255,115,45,0.6)]
          "
        />

        {/* STAR RATING */}
        <div className="flex gap-1">
          {Array.from({ length: item.rating }).map((_, i) => (
            <img
              key={i}
              src="/icons/star.png"
              alt="Star"
              className="w-6 h-6"
            />
          ))}
        </div>

        {/* QUOTE */}
        <p className="font-quicksand font-semibold text-lg leading-relaxed text-center text-[#FDFDFD] max-w-[500px]">
          “{item.quote}”
        </p>

        {/* AUTHOR */}
        <div className="text-center">
          <p className="font-semibold text-white">{item.name}</p>
          <p className="text-sm text-orange-500">{item.role}</p>
        </div>

        {/* AVATAR */}
        <div className="absolute -bottom-[36px] left-1/2 -translate-x-1/2 z-40">
          <img
            src={item.avatar}
            alt={item.name}
            className="
              w-16 h-16
              rounded-full
              border-2 border-[#181D27]
              bg-black
              object-cover
            "
          />
        </div>
      </div>
    </div>
  );
}
 