import { useEffect, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};

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

const CARD_WIDTH = 520;
const GAP = 56;
const SWIPE_THRESHOLD = 80;

const items = [...DATA, ...DATA, ...DATA];
const START_INDEX = DATA.length;

export default function TestimonialSection() {
  const [index, setIndex] = useState(START_INDEX);
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

  const startX = useRef(0);
  const animating = useRef(false);

  useEffect(() => {
    const id = setInterval(() => slideTo(index + 1), 5000);
    return () => clearInterval(id);
  }, [index]);

  useEffect(() => {
    if (index === DATA.length * 2) snapTo(START_INDEX);
    if (index === DATA.length - 1) snapTo(START_INDEX - 1);
  }, [index]);

  function snapTo(i: number) {
    animating.current = true;
    setIndex(i);
    requestAnimationFrame(() => (animating.current = false));
  }

  function slideTo(i: number) {
    if (animating.current) return;
    animating.current = true;
    setIndex(i);
    setOffset(0);
    setTimeout(() => (animating.current = false), 650);
  }

  function onPointerDown(e: React.PointerEvent) {
    startX.current = e.clientX;
    setDragging(true);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!dragging) return;
    setOffset(e.clientX - startX.current);
  }

  function onPointerUp() {
    setDragging(false);
    if (offset > SWIPE_THRESHOLD) slideTo(index - 1);
    else if (offset < -SWIPE_THRESHOLD) slideTo(index + 1);
    else setOffset(0);
  }

  return (
    <section id="testimonials" className="bg-black py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center">

        {/* HEADER */}
        <div className="mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Partners Say About Working With Us
          </h2>
          <p className="mt-4 text-neutral-400">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative max-w-7xl mx-auto overflow-x-hidden overflow-y-visible pb-28 touch-pan-y"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            className={`flex ${
              dragging ? "" : "transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
            }`}
            style={{
              transform: `translateX(calc(50% - ${
                index * (CARD_WIDTH + GAP) + CARD_WIDTH / 2
              }px + ${offset}px))`,
              gap: GAP,
            }}
          >
            {items.map((item, i) => (
              <CarouselCard
                key={`${item.name}-${i}`}
                item={item}
                active={i === index}
              />
            ))}
          </div>
        </div>

        {/* BULLETS */}
        <div className="mt-20 flex justify-center gap-3">
          {DATA.map((_, i) => {
            const real = index % DATA.length;
            return (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === real ? "bg-orange-500 scale-125" : "bg-neutral-600"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CarouselCard({
  item,
  active,
}: {
  item: Testimonial;
  active: boolean;
}) {
  return (
    <div
      className={`
        w-[520px]
        h-[340px]
        shrink-0
        transition-all duration-700
        ${active ? "scale-100 opacity-100" : "scale-[0.9] opacity-40"}
      `}
    >
      <div
        className="
          relative h-full overflow-visible
          bg-neutral-900 rounded-2xl
          border border-neutral-800
          pt-14 pb-10 px-10
          flex flex-col justify-between
          shadow-[0_40px_100px_rgba(0,0,0,0.75)]
        "
      >
        {/* QUOTE ICON */}
        <img
          src="/icons/quote.png"
          alt="Quote"
          className="
            absolute -top-7 left-8
            w-12 h-12 z-30
            pointer-events-none
            drop-shadow-[0_10px_30px_rgba(255,115,45,0.45)]
          "
        />

        {/* CONTENT */}
        <div className="relative z-20">
          {/* STARS */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: item.rating }).map((_, i) => (
              <span key={i} className="text-orange-400 text-xs">★</span>
            ))}
          </div>

          {/* QUOTE TEXT */}
          <p
            className={`
              text-sm leading-relaxed text-center max-w-[420px] mx-auto
              ${active ? "text-neutral-200" : "text-neutral-500"}
            `}
          >
            {item.quote}
          </p>

          {/* AUTHOR */}
          <div className="mt-6 text-center">
            <p className="font-semibold text-white">{item.name}</p>
            <p className="text-sm text-orange-500">{item.role}</p>
          </div>
        </div>

        {/* AVATAR */}
        <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 z-30">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-neutral-800 bg-black"
          />
        </div>

        {/* SIDE GRADIENT (ONLY FOR INACTIVE) */}
        {!active && (
          <div
            className="
              absolute inset-0 rounded-2xl z-10
              bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_45%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.85)_100%)]
            "
          />
        )}
      </div>
    </div>
  );
}
