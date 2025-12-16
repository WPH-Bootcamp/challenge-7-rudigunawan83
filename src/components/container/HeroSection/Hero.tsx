import Button from "../../ui/Button";

const Hero = () => {
  return (
    <section id= "hero" className="relative min-h-screen overflow-hidden bg-black text-white pt-32">

      {/* ================= BACKGROUND GRADIENT SYSTEM ================= */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0b0604]" />

        {/* RIGHT SIDE — BIG SOFT ORANGE GLOW (MAIN FIX AREA) */}
        <div
          className="
            absolute top-[-25%] right-[-15%]
            w-[1200px] h-[1200px]
            bg-[radial-gradient(circle,rgba(255,120,60,0.22),transparent_72%)]
          "
        />

        {/* Secondary warm wash (diagonal light) */}
        <div
          className="
            absolute top-0 right-0
            w-full h-full
            bg-[linear-gradient(135deg,transparent_55%,rgba(255,120,60,0.08)_75%,transparent_100%)]
          "
        />

        {/* Vignette — bikin tepi gelap & tengah hidup */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_70%_50%,transparent_40%,rgba(0,0,0,0.85)_85%)]
          "
        />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 items-center gap-16">

        {/* LEFT TEXT */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Your Tech Partner for <br />
            <span className="text-orange-500">Smarter Growth</span>
          </h1>

          <p className="mt-6 text-neutral-400 max-w-lg mx-auto lg:mx-0">
            We deliver tailored IT solutions to help you scale with speed
            and confidence.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button className="px-10 py-4">
              Let&apos;s Talk
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-14 lg:mt-0 flex justify-center lg:justify-end relative">
          <img
            src="/hero-illustration.png"
            alt="Hero Illustration"
            className="
              w-[260px]
              sm:w-[300px]
              md:w-[360px]
              lg:w-[520px]
              xl:w-[600px]
              drop-shadow-[0_0_80px_rgba(255,120,60,0.25)]
            "
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
