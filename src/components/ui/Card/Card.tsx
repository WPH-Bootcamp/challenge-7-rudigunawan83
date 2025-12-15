type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="rounded-2xl bg-neutral-900 p-6 hover:bg-neutral-800 transition">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>
  );
};

export default Card;
