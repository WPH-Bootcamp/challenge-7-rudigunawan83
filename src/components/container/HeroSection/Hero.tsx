import Button from "../../ui/Button";

const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* === GRADIENT LAYERS === */}

      {/* Glow besar kanan */}
      <div className="absolute inset-0">
        <div className="absolute right-[-20%] top-[-10%] w-[900px] h-[900px]
          bg-[radial-gradient(circle,rgba(255,115,45,0.35),transparent_60%)]" />
      </div>

      {/* Glow sedang tengah */}
      <div className="absolute inset-0">
        <div className="absolute right-[15%] top-[20%] w-[600px] h-[600px]
          bg-[radial-gradient(circle,rgba(255,160,80,0.18),transparent_65%)]" />
      </div>

      {/* Shadow kiri */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.95),rgba(0,0,0,0.6),transparent)]" />

      {/* === CONTENT === */}
      <div className="relative container mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 items-center gap-16">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Your Tech Partner for <br />
            <span className="text-orange-500">Smarter Growth</span>
          </h1>

          <p className="mt-6 text-neutral-400 max-w-lg">
            We deliver tailored IT solutions to help you scale with speed
            and confidence.
          </p>

          <Button className="mt-8 px-8 py-3">
            Let's Talk
          </Button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden lg:flex justify-end">
          <img
            src="/hero-illustration.png"
            alt="Hero Illustration"
            className="w-[520px] xl:w-[600px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
