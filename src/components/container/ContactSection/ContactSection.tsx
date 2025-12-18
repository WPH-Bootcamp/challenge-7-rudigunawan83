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
        bg-black
        w-full
        h-[956px]
        py-[80px]
      "
    >
      {/* ===== MAIN CONTAINER ===== */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-[140px]
          h-full
          flex
          flex-col
          items-center
          gap-[64px]
        "
      >
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[720px]">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Ready to Start? Let’s Talk.
          </h2>
          <p className="mt-4 text-neutral-400">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="
            w-[720px]
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
            <label className="block text-sm text-neutral-300 mb-4">
              Services
            </label>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
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
              w-full
              h-14
              rounded-full
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div onClick={onClose} className="absolute inset-0" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ================= POPUPS ================= */

function PopupSuccess({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-[380px] bg-neutral-900 rounded-2xl p-8 text-center border border-neutral-800">
      <img
        src="/icons/message-ok.png"
        alt="Success"
        className="mx-auto mb-6 w-20"
      />
      <h3 className="text-white text-lg font-semibold">
        Message Received!
      </h3>
      <p className="text-neutral-400 text-sm mt-2">
        Thanks for reaching out — we’ll get back to you soon.
      </p>
      <button
        onClick={onClose}
        className="mt-6 w-full h-12 rounded-full bg-orange-500 text-white"
      >
        Back to Home
      </button>
    </div>
  );
}

function PopupError({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-[380px] bg-neutral-900 rounded-2xl p-8 text-center border border-neutral-800">
      <img
        src="/icons/message-error.png"
        alt="Error"
        className="mx-auto mb-6 w-20"
      />
      <h3 className="text-white text-lg font-semibold">
        Oops! Something went wrong.
      </h3>
      <p className="text-neutral-400 text-sm mt-2">
        Please fill all fields correctly and try again.
      </p>
      <button
        onClick={onClose}
        className="mt-6 w-full h-12 rounded-full bg-orange-500 text-white"
      >
        Try Again
      </button>
    </div>
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
      <label className="block text-sm text-neutral-300 mb-2">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full h-12 rounded-xl
          bg-neutral-800 border border-neutral-800
          px-4 text-white
          placeholder:text-neutral-500
          focus:outline-none focus:border-orange-500
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
      <label className="block text-sm text-neutral-300 mb-2">
        {label}
      </label>
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full rounded-xl
          bg-neutral-900 border border-neutral-800
          px-4 py-3 text-white
          placeholder:text-neutral-500
          focus:outline-none focus:border-orange-500
          resize-none
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
            peer appearance-none
            w-4 h-4 rounded
            border border-neutral-600
            bg-neutral-800
            checked:bg-orange-500
            checked:border-orange-500
          "
        />
        <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold opacity-0 peer-checked:opacity-100">
          ✓
        </span>
      </span>
      <span className="text-sm text-neutral-300">{label}</span>
    </label>
  );
}
