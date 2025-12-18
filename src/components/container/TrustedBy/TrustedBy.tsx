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
    <section className="bg-black overflow-hidden">
      {/* ===== INLINE CSS (ANTI TAILWIND ISSUE) ===== */}
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
          px-4 sm:px-6 lg:px-[140px]
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
                tracking-normal
                text-center
                text-[#FDFDFD]
            "
            >
            Trusted by Global Innovators &amp; Leading Brands
            </p>


        {/* MARQUEE */}
        <div className="relative overflow-hidden">
          {/* FADE EDGES */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

          {/* TRACK */}
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center px-10">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="
                    h-6 md:h-7
                    opacity-60
                    grayscale
                    transition
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
