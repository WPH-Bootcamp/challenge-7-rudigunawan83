type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "Web Development",
    description: "Build fast, scalable, and SEO-friendly websites.",
    icon: "/icons/web.png",
  },
  {
    title: "Mobile App Development",
    description: "Native & cross-platform apps tailored to user needs.",
    icon: "/icons/mobile.png",
  },
  {
    title: "UI/UX Design",
    description: "Delight users with intuitive and beautiful interfaces.",
    icon: "/icons/uiux.png",
  },
  {
    title: "Cloud Solutions",
    description: "Secure and flexible cloud infrastructure for growth.",
    icon: "/icons/cloud.png",
  },
  {
    title: "Software Development",
    description: "Custom solutions built around your business logic.",
    icon: "/icons/software.png",
  },
  {
    title: "IT Infrastructure",
    description: "Scale your backend with reliable tech foundations.",
    icon: "/icons/infrastructure.png",
  },
  {
    title: "Cybersecurity Services",
    description: "Stay protected with enterprise-grade security.",
    icon: "/icons/security.png",
  },
  {
    title: "QA Solutions",
    description: "Ensure performance with rigorous testing frameworks.",
    icon: "/icons/qa.png",
  },
  {
    title: "IT Consulting & Support",
    description: "Make smarter tech decisions with expert guidance.",
    icon: "/icons/consulting.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-black py-28">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <div
      className="
        relative
        rounded-2xl
        bg-neutral-900
        p-6 pt-10
        border border-neutral-800
        transition
        hover:-translate-y-1
        hover:border-neutral-700
        hover:shadow-[0_0_30px_rgba(255,115,45,0.08)]
      "
    >
      {/* ICON FLOATING (NO BOX) */}
      <img
        src={icon}
        alt={title}
        className="
          absolute
          -top-4
          left-6
          h-8 w-8
          drop-shadow-[0_6px_14px_rgba(0,0,0,0.6)]
        "
      />

      {/* CONTENT */}
      <h3 className="text-white font-semibold text-lg">
        {title}
      </h3>
      <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
