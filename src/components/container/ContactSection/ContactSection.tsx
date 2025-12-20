import { useState } from "react";

/* ================= TYPES ================= */

type PopupType = "success" | "error";

type FormState = {
  name: string;
  email: string;
  message: string;
  services: Record<string, boolean>;
};

/* ================= COMPONENT ================= */

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    services: {
      "Web Development": false,
      "Cloud Solutions": false,
      "Mobile App Development": false,
      "Software Development": false,
      "UI/UX Design": false,
      Other: false,
    },
  });

  const [popup, setPopup] = useState<PopupType | null>(null);

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !isEmailValid(form.email) ||
      !form.message.trim()
    ) {
      setPopup("error");
      return;
    }

    setPopup("success");
  };

  return (
    <section
      id="contact"
      className="
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300
        w-full
        py-[80px]
        lg:h-[956px]
      "
    >
      {/* ===== MAIN CONTAINER ===== */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-6
          md:px-12
          lg:px-[140px]
          flex
          flex-col
          items-center
          gap-[64px]
        "
      >
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[720px]">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Ready to Start? Let’s Talk.
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="
            w-full
            max-w-[720px]
            flex
            flex-col
            gap-[48px]
          "
        >
          <Input
            label="Name"
            value={form.name}
            placeholder="Enter your name"
            onChange={(v) => setForm({ ...form, name: v })}
          />

          <Input
            label="Email"
            value={form.email}
            placeholder="Enter your email"
            onChange={(v) => setForm({ ...form, email: v })}
          />

          <Textarea
            label="Message"
            value={form.message}
            placeholder="Enter your message"
            onChange={(v) => setForm({ ...form, message: v })}
          />

          {/* ================= SERVICES ================= */}
          <div>
            <label className="block text-sm mb-4 text-neutral-700 dark:text-neutral-300">
              Services
            </label>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-x-8
                gap-y-4
              "
            >
              {Object.keys(form.services).map((key) => (
                <Checkbox
                  key={key}
                  label={key}
                  checked={form.services[key]}
                  onChange={(checked) =>
                    setForm({
                      ...form,
                      services: {
                        ...form.services,
                        [key]: checked,
                      },
                    })
                  }
                />
              ))}
            </div>
          </div>

          {/* ================= BUTTON ================= */}
          <button
            type="submit"
            className="
              w-full h-14 rounded-full
              bg-gradient-to-r from-orange-500 to-orange-600
              text-white font-medium
              shadow-[0_10px_40px_rgba(255,115,45,0.35)]
              hover:brightness-110
              transition
            "
          >
            Send
          </button>
        </form>
      </div>

      {/* ================= POPUP ================= */}
      {popup && (
        <Modal onClose={() => setPopup(null)}>
          {popup === "success" ? (
            <PopupSuccess onClose={() => setPopup(null)} />
          ) : (
            <PopupError onClose={() => setPopup(null)} />
          )}
        </Modal>
      )}
    </section>
  );
}

/* ================= MODAL ================= */

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div onClick={onClose} className="absolute inset-0" />
      <div className="relative z-10 w-full max-w-[380px]">{children}</div>
    </div>
  );
}

/* ================= POPUPS ================= */

function PopupBase({
  icon,
  title,
  description,
  button,
  onClose,
}: {
  icon: string;
  title: string;
  description: string;
  button: string;
  onClose: () => void;
}) {
  return (
    <div
      className="
        w-full rounded-2xl p-8 text-center
        bg-white dark:bg-[#0A0D12]
        border border-neutral-200 dark:border-[#181D27]
        transition-colors
      "
    >
      <img src={icon} alt={title} className="mx-auto mb-6 w-20" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
      <button
        onClick={onClose}
        className="mt-6 w-full h-12 rounded-full bg-orange-500 text-white hover:brightness-110 transition"
      >
        {button}
      </button>
    </div>
  );
}

function PopupSuccess({ onClose }: { onClose: () => void }) {
  return (
    <PopupBase
      icon="/icons/message-ok.png"
      title="Message Received!"
      description="Thanks for reaching out — we’ll get back to you soon."
      button="Back to Home"
      onClose={onClose}
    />
  );
}

function PopupError({ onClose }: { onClose: () => void }) {
  return (
    <PopupBase
      icon="/icons/message-error.png"
      title="Oops! Something went wrong."
      description="Please fill all fields correctly and try again."
      button="Try Again"
      onClose={onClose}
    />
  );
}

/* ================= INPUTS ================= */

function Input({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm mb-2 text-neutral-700 dark:text-neutral-300">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full h-12 rounded-xl px-4
          bg-white dark:bg-neutral-900
          border border-neutral-300 dark:border-neutral-800
          text-black dark:text-white
          placeholder:text-neutral-400
          focus:outline-none focus:border-orange-500
          transition-colors
        "
      />
    </div>
  );
}

function Textarea({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm mb-2 text-neutral-700 dark:text-neutral-300">
        {label}
      </label>
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full rounded-xl px-4 py-3 resize-none
          bg-white dark:bg-neutral-900
          border border-neutral-300 dark:border-neutral-800
          text-black dark:text-white
          placeholder:text-neutral-400
          focus:outline-none focus:border-orange-500
          transition-colors
        "
      />
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <span className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="
            peer appearance-none w-4 h-4 rounded
            border border-neutral-400 dark:border-neutral-600
            bg-white dark:bg-neutral-900
            checked:bg-orange-500 checked:border-orange-500
            transition
          "
        />
        <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold opacity-0 peer-checked:opacity-100">
          ✓
        </span>
      </span>
      <span className="text-sm text-neutral-700 dark:text-neutral-300">
        {label}
      </span>
    </label>
  );
}
