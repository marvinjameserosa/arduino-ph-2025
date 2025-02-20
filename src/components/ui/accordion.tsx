'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  faqs: FAQItem[];
  startIndex: number;
  openIndex: number | null;
  toggleAccordion: (index: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({ faqs, startIndex, openIndex, toggleAccordion }) => {
  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index + startIndex} className="relative p-[0.8px] rounded-xl lg:mx-2 mb-4">
          <div className="absolute inset-0 bg-gradient-border-transparent rounded-xl"></div>
          <div className="relative bg-[#28262d] hover:bg-[#7d7c81] hover:text-black transition-all rounded-xl p-4">
            <button
              onClick={() => toggleAccordion(index + startIndex)}
              className="flex items-center justify-between w-full text-left text-base font-semibold"
            >
              {faq.question}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index + startIndex ? 'rotate-180' : ''
                }`}
                size={24}
                strokeWidth={2}
              />
            </button>
            {openIndex === index + startIndex && (
              <div className="mt-4 text-sm">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
