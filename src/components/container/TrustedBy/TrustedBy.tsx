const logos = [
    { name: "Upwork", logo: "/brands/upwork.png" },
    { name: "Zoom", logo: "/brands/zoom.png" },
    { name: "Postman", logo: "/brands/postman.png" },
    { name: "Databricks", logo: "/brands/databricks.png" },
    { name: "Airbnb", logo: "/brands/airbnb.png" },
    { name: "Dropbox", logo: "/brands/dropbox.png" },
    { name: "PayPal", logo: "/brands/paypal.png" },
];

const TrustedBy = () => {
    return (
        <section className="bg-black pt-8 pb-20">
            <div className="container mx-auto px-6 text-center mb-8">
                <p
                    className="
            text-sm
            text-white
            font-medium
            tracking-wide
            drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]
          "
                >
                    Trusted by Global Innovators &amp; Leading Brands
                </p>
            </div>

            {/* MARQUEE */}
            <div className="overflow-hidden">
                <div className="marquee-track">
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo.logo}
                            alt={logo.name}
                            className="
          h-6 md:h-7
          opacity-50 grayscale
          shrink-0
          px-8
        "
                        />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default TrustedBy;
