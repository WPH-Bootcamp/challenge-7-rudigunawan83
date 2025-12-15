type PortfolioItem = {
  tag: string;
  title: string;
  images: string[];
};

const portfolios: PortfolioItem[] = [
  {
    tag: "Landing Page",
    title: "Portfolio 1",
    images: ["/portfolio/portofolio1.png"],
  },
  {
    tag: "Landing Page",
    title: "Portfolio 2",
    images: ["/portfolio/portofolio2.png"],
  },
  {
    tag: "Landing Page",
    title: "Portfolio 3",
    images: ["/portfolio/portofolio3.png"],
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-black py-32">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            From Vision to Launch! Projects We’re Proud Of
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-20 md:grid-cols-3">
          {portfolios.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;

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
    <div className="group text-center">

      {/* IMAGE WRAPPER */}
      <div
        className="
          relative
          mx-auto
          w-[280px] md:w-[320px]
          overflow-hidden
          rounded-2xl
          transition
          duration-500
          group-hover:-translate-y-2
          group-hover:shadow-[0_40px_100px_rgba(255,115,45,0.18)]
        "
      >
        {/* IMAGE */}
        <img
          src={images[0]}
          alt={title}
          className="
            w-full
            rounded-2xl
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />

        {/* OVERLAY GRADIENT */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-t
            from-black/30
            to-transparent
            opacity-0
            transition
            duration-500
            group-hover:opacity-100
          "
        />
      </div>

      {/* TEXT */}
      <p className="mt-6 text-orange-500 text-sm tracking-wide">
        {tag}
      </p>
      <h3 className="mt-1 text-white font-semibold text-lg">
        {title}
      </h3>
    </div>
  );
};
