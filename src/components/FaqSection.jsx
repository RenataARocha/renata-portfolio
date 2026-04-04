import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/portfolioData";

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <article
      className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-orange-900/30 shadow-lg overflow-hidden hover:border-orange-800/50 transition-all"
      role="listitem"
    >
      <h3>
        <button
          onClick={() => onToggle(index)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
        >
          <span className="font-semibold text-left text-gray-200">
            {faq.question}
          </span>
          <ChevronDown
            size={20}
            className={`text-orange-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </h3>

      {isOpen && (
        <div
          id={`faq-answer-${index}`}
          className="px-6 pb-4 text-gray-400 border-t border-orange-900/30 pt-4 animate-fade-in"
          role="region"
        >
          {faq.answer}
        </div>
      )}
    </article>
  );
}

export default function FaqSection() {
  const [faqOpen, setFaqOpen] = useState({});
  const toggleFaq = (index) =>
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));

  return (
    <section
      id="faq"
      className="py-20 px-4 relative"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          id="faq-heading"
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
        >
          Perguntas Frequentes
        </h2>
        <div
          className="space-y-4"
          role="list"
          aria-label="Lista de perguntas frequentes"
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              isOpen={!!faqOpen[index]}
              onToggle={toggleFaq}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
