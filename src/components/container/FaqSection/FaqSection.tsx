import { useState } from "react";

type FaqItem = {
    question: string;
    answer: string;
};

const faqs: FaqItem[] = [
    {
        question: "What services do you offer?",
        answer:
            "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
    },
    {
        question: "How do I know if this is right for my business?",
        answer:
            "We start with a consultation to understand your goals and recommend the best solution.",
    },
    {
        question: "How much does a project cost?",
        answer:
            "Project cost depends on scope, complexity, and timeline. We offer flexible pricing.",
    },
    {
        question: "How long does it take?",
        answer:
            "Most projects take between a few weeks to several months, depending on requirements.",
    },
    {
        question: "Can I start with a small project first?",
        answer:
            "Absolutely. Many of our clients start small and scale gradually.",
    },
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="bg-black py-28">
            <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-14">

                {/* LEFT – FAQ */}
                <div className="lg:col-span-2">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Need Help? Start Here.
                        </h2>
                        <p className="hidden md:block text-sm text-neutral-400 max-w-xs text-right">
                            Everything you need to know — all in one place.
                        </p>
                    </div>

                    {/* FAQ LIST */}
                    <div className="divide-y divide-neutral-800">
                        {faqs.map((faq, index) => {
                            const isOpen = activeIndex === index;

                            return (
                                <div key={faq.question} className="py-6">
                                    <button
                                        onClick={() =>
                                            setActiveIndex(isOpen ? null : index)
                                        }
                                        className="w-full flex justify-between items-center text-left"
                                    >
                                        <span className="text-white font-medium">
                                            {faq.question}
                                        </span>
                                        <span className="text-xl text-neutral-400">
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <p className="mt-4 text-sm text-neutral-400 max-w-xl">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT – CTA CARD */}
                <div className="relative">
                    <div className="bg-orange-600 rounded-[28px] p-8 text-white sticky top-28 max-w-sm mx-auto">

                        {/* TEXT */}
                        <h3 className="text-2xl font-bold leading-snug">
                            Let’s talk it <br /> through
                        </h3>

                        <p className="mt-2 text-sm opacity-90">
                            book a free consultation with <br /> our team.
                        </p>

                        {/* IMAGE */}
                        <div className="mt-6 overflow-hidden rounded-2xl">
                            <img
                                src="/consultation.jpg"
                                alt="Consultation"
                                className="w-full h-[160px] object-cover"
                            />
                        </div>

                        {/* BUTTON */}
                        <button
                            className="
                                        mt-6 w-full py-3 rounded-full
                                        bg-white text-black text-sm font-semibold
                                        hover:bg-neutral-200 transition
                                    "
                                >
                            Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
