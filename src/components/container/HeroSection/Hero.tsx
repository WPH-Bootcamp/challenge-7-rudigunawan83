import Button from "../../ui/Button";

const NAV_HEIGHT = 84;

const Hero = () => {
  return (
    <section
      id="About"
      className="
        relative overflow-hidden
        bg-white dark:bg-black
        transition-colors duration-300
        scroll-mt-[84px]
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* DARK BACKGROUND */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0b0b0b]" />

          {/* CLEAN DARK VIGNETTE (NO ORANGE HALO) */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_60%_50%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.9)_85%)]
            "
          />
        </div>

        {/* LIGHT BACKGROUND */}
        <div className="absolute inset-0 block dark:hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#FFF7F3]" />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-10
          max-w-[1440px]

          pt-[84px] lg:pt-0
          min-h-[calc(100svh-84px)] lg:min-h-[732px]

          mx-auto
          px-6 lg:px-[140px]
          grid lg:grid-cols-2
          items-center
          gap-12 lg:gap-16
        "
      >
        {/* ================= LEFT TEXT ================= */}
        <div className="text-center lg:text-left">
          <h1
            className="
              font-display font-bold
              text-3xl sm:text-4xl md:text-5xl xl:text-[64px]
              leading-[1.1] tracking-[-0.02em]
              text-black dark:text-white
              text-balance
            "
          >
            Your Tech Partner for <br />
            <span className="text-[#FF6C37]">Smarter Growth</span>
          </h1>

          <p
            className="
              mt-5 md:mt-6
              font-quicksand font-medium
              text-base sm:text-lg md:text-xl
              leading-relaxed
              text-neutral-700 dark:text-neutral-300
              max-w-lg mx-auto lg:mx-0
            "
          >
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
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
              w-[240px] h-[240px]
              sm:w-[300px] sm:h-[300px]
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
              w-[240px] h-[240px]
              sm:w-[300px] sm:h-[300px]
              md:w-[420px] md:h-[420px]
              lg:w-[747px] lg:h-[747px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
