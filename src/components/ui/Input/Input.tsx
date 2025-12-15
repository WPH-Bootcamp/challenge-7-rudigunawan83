type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`w-full rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3 text-white focus:outline-none focus:border-orange-500 ${className}`}
    />
  );
};

export default Input;
