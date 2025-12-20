import Button from "../../ui/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        relative overflow-hidden
        bg-white dark:bg-black
        transition-colors duration-300
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* DARK BACKGROUND */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0b0604]" />
          <div
            className="
              absolute top-[-25%] right-[-15%]
              w-[1200px] h-[1200px]
              bg-[radial-gradient(circle,rgba(255,120,60,0.22),transparent_72%)]
            "
          />
        </div>

        {/* LIGHT BACKGROUND */}
        <div className="absolute inset-0 block dark:hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#FFF7F3]" />
        </div>

        {/* DARK ONLY EFFECTS */}
        <div
          className="
            absolute inset-0 hidden dark:block
            bg-[linear-gradient(135deg,transparent_55%,rgba(255,120,60,0.08)_75%,transparent_100%)]
          "
        />
        <div
          className="
            absolute inset-0 hidden dark:block
            bg-[radial-gradient(circle_at_70%_50%,transparent_40%,rgba(0,0,0,0.85)_85%)]
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-10
          max-w-[1440px]
          min-h-[732px]
          mx-auto
          px-6 lg:px-[140px]
          grid lg:grid-cols-2
          items-center
          gap-16
        "
      >
        {/* ================= LEFT TEXT ================= */}
        <div className="text-center lg:text-left">
          <h1
            className="
              font-display font-bold
              text-3xl sm:text-4xl md:text-5xl xl:text-[64px]
              leading-[1.05] tracking-[-0.02em]
              text-black dark:text-white
            "
          >
            Your Tech Partner for <br />
            <span className="text-[#FF6C37]">Smarter Growth</span>
          </h1>

          <p
            className="
              mt-6
              font-quicksand font-semibold
              text-lg md:text-xl
              text-neutral-700 dark:text-white
              max-w-lg mx-auto lg:mx-0
            "
          >
            We deliver tailored IT solutions to help you scale with speed and confidence.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button className="px-10 py-4">
              Let&apos;s Talk
            </Button>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center lg:justify-end">
          {/* LIGHT IMAGE */}
          <img
            src="/hero-illustration-light.png"
            alt="Hero Illustration Light"
            className="
              block dark:hidden
              w-[260px] h-[260px]
              sm:w-[320px] sm:h-[320px]
              md:w-[420px] md:h-[420px]
              lg:w-[747px] lg:h-[747px]
              object-contain
            "
          />

          {/* DARK IMAGE */}
          <img
            src="/hero-illustration.png"
            alt="Hero Illustration Dark"
            className="
              hidden dark:block
              w-[260px] h-[260px]
              sm:w-[320px] sm:h-[320px]
              md:w-[420px] md:h-[420px]
              lg:w-[747px] lg:h-[747px]
              object-contain
              drop-shadow-[0_0_80px_rgba(255,120,60,0.25)]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
