type PortfolioItem = {
  tag: string;
  title: string;
  images: string[];
};

const portfolios: PortfolioItem[] = [
  {
    tag: "Landing Page",
    title: "Portofolio 1",
    images: ["/portfolio/portofolio1.png"],
  },
  {
    tag: "Landing Page",
    title: "Portofolio 2",
    images: ["/portfolio/portofolio2.png"],
  },
  {
    tag: "Landing Page",
    title: "Portofolio 3",
    images: ["/portfolio/portofolio3.png"],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-black text-white">
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-4
          lg:px-[140px]
          py-[80px]
          flex
          flex-col
          gap-[64px]
        "
      >
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            From Vision to Launch! Projects We’re Proud Of
          </h2>
          <p className="mt-4 text-neutral-400">
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {portfolios.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

/* ================= CARD ================= */

const PortfolioCard = ({
  tag,
  title,
  images,
}: {
  tag: string;
  title: string;
  images: string[];
}) => {
  return (
    <div
      className="
        w-[373px]
        h-[449px]
        max-w-full
        flex
        flex-col
        gap-[12px]
        text-center
        group
      "
    >
      {/* IMAGE (373 x 373) */}
      <div
        className="
          relative
          w-[373px]
          h-[373px]
          overflow-hidden
          rounded-[16px]
          transition
          duration-500
          group-hover:-translate-y-2
          group-hover:shadow-[0_32px_80px_rgba(255,115,45,0.18)]
        "
      >
        <img
          src={images[0]}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            rounded-[16px]
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.05]
          "
        />

        {/* OVERLAY */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-t
            from-black/40
            to-transparent
            opacity-0
            transition
            duration-500
            group-hover:opacity-100
          "
        />
      </div>

      {/* TEXT */}
      <div className="flex flex-col gap-[4px] items-center">
        <p
          className="
                    w-[373px]
                    h-[30px]
                    font-quicksand
                    font-medium
                    text-md
                    leading-md
                    tracking-normal
                    text-[#FF623E]
                    text-center
                  "
                  >
          {tag}
        </p>

        <h3 className="font-semibold text-lg text-white text-center">
          {title}
        </h3>
      </div>

    </div>
  );
};
