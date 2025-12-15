type ModalProps = {
  open: boolean;
  onClose: () => void;
  variant: "success" | "error";
  title: string;
  description: string;
  buttonText: string;
};

export default function Modal({
  open,
  onClose,
  variant,
  title,
  description,
  buttonText,
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative w-[360px] rounded-2xl bg-neutral-900 border border-neutral-800 shadow-[0_40px_120px_rgba(0,0,0,0.8)] text-center p-8">

        {/* ICON */}
        <img
          src={
            variant === "success"
              ? "/icons/MessageOK.png"
              : "/icons/MessageError.png"
          }
          alt="Status Icon"
          className="mx-auto w-20 h-20 mb-6"
        />

        <h3 className="text-white font-semibold text-lg mb-2">
          {title}
        </h3>

        <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
          {description}
        </p>

        <button
          onClick={onClose}
          className="
            w-full h-11 rounded-full
            bg-gradient-to-r from-orange-500 to-orange-600
            text-white text-sm font-medium
            hover:brightness-110
            transition
          "
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
