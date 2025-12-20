const logos = [
  { name: "Adobe", logo: "/brands/adobe.png" },
  { name: "Upwork", logo: "/brands/upwork.png" },
  { name: "Zoom", logo: "/brands/zoom.png" },
  { name: "Postman", logo: "/brands/postman.png" },
  { name: "Databricks", logo: "/brands/databricks.png" },
  { name: "Airbnb", logo: "/brands/airbnb.png" },
  { name: "Dropbox", logo: "/brands/dropbox.png" },
  { name: "PayPal", logo: "/brands/paypal.png" },
  { name: "Netflix", logo: "/brands/netflix.png" },
];

const TrustedBy = () => {
  return (
    <section
      className="
        w-full
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
        overflow-hidden
      "
    >
      {/* ===== INLINE KEYFRAMES ===== */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>

      {/* ===== MAIN CONTAINER ===== */}
      <div
        className="
          max-w-[1440px]
          h-[236px]
          mx-auto
          px-6
          md:px-12
          lg:px-[140px]
          flex flex-col
          justify-center
          gap-8
        "
      >
        {/* TITLE */}
        <p
          className="
            font-display
            font-bold
            text-[20px]
            leading-[28px]
            text-center
            text-neutral-800
            dark:text-[#FDFDFD]
            transition-colors
          "
        >
          Trusted by Global Innovators &amp; Leading Brands
        </p>

        {/* MARQUEE */}
        <div className="relative overflow-hidden">
          {/* LEFT FADE */}
          <div
            className="
              pointer-events-none
              absolute
              left-0 top-0
              h-full w-24
              bg-gradient-to-r
              from-white
              dark:from-black
              to-transparent
              z-10
              transition-colors
            "
          />

          {/* RIGHT FADE */}
          <div
            className="
              pointer-events-none
              absolute
              right-0 top-0
              h-full w-24
              bg-gradient-to-l
              from-white
              dark:from-black
              to-transparent
              z-10
              transition-colors
            "
          />

          {/* TRACK */}
          <div className="marquee-track">
            {[...logos, ...logos].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex items-center px-8 md:px-10"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="
                    h-6 md:h-7
                    opacity-60
                    grayscale
                    transition-all duration-300
                    hover:opacity-100
                    hover:grayscale-0
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
