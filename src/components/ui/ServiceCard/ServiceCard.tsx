type ServiceCardProps = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 hover:bg-neutral-800 transition duration-300">
      <h3 className="text-lg font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-sm text-neutral-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
