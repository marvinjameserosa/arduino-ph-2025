'use client';

import { useState } from 'react';

const faqData = [
  {
    question: 'What is Arduino Day Philippines?',
    answer:'Arduino Day Philippines is an annual celebration dedicated to the Arduino platform and its community. Its an event that brings together enthusiasts from all backgrounds to share ideas, showcase projects, and explore the latest in Arduino technology',},
  {
    question: 'When and where will Arduino Day Philippines be held?',
    answer:'The event will take place on March 23, 2025, from 9 AM to 5 PM at Polytechnic University of the Philippines',},
  {
    question: 'Who can attend Arduino Day Philippines?',
    answer:'Arduino Day Philippines is open to everyone interested in Arduino, including students, educators, hobbyists, and professionals, regardless of their skill level',},
  {
    question: 'Is there a registration fee for the event?',
    answer:'Activities include project demonstrations, ask the expert panels, and workshops. Additionally, each attendee will receive a certificate of participation',},
  {
    question: 'What activities are planned for the event?',
    answer:'Activities include project demonstrations, ask the expert panels, and workshops. Additionally, each attendee will receive a certificate of participation',},
  {
    question: 'How can I participate in the project demonstration?',
    answer:'To showcase your Arduino project, please email us at arduinodayph@gmail.com for a demonstration slot.',},
  {
    question: 'Will there be any workshops or seminars?',
    answer:'Yes, the event will feature a variety of workshops and seminars led by experts in Arduino technology, suitable for various skill levels',},
  {
    question: 'Can companies participate or sponsor the event?',
    answer:'Companies are welcome to participate or sponsor the event. For partnership opportunities, please contact us at arduinodayph@gmail.com',
  },
  {
    question: 'What safety measures are in place for the event?',
    answer:'All attendees are requested to wear face masks. We will implement additional safety measures as per local health guidelines and inform participants accordingly',
  },
  {
    question: 'Where can I find updates about the event?',
    answer:'For the latest information, please visit our Facebook page at facebook.com/arduinodayph. We will post regular updates as the event approaches.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showSecondColumn, setShowSecondColumn] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const half = Math.ceil(faqData.length / 2);
  const column1 = faqData.slice(0, half);
  const column2 = faqData.slice(half);

  return (
    <div className="relative container w-full">
      <div>
        <h2 className="mb-8 h2 text-white">Frequently Asked Questions</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1 */}
        <div>
          {column1.map((faq, index) => (
            <div key={index} className="relative p-[2px] rounded-xl lg:my-4 mt-4 mb-0">
              <div className="absolute inset-0 bg-gradient-border-transparent rounded-xl p-[2px]"></div>
              <div className="relative bg-[#28262d] hover:bg-[#7d7c81] hover:text-black transition-all rounded-xl p-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full text-left text-base font-semibold"
                >
                  {faq.question}
                  <svg
                    className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="mt-4 text-sm">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 - Hidden on small screens */}
        <div className={`md:block ${showSecondColumn ? 'block' : 'hidden'}`}>
          {column2.map((faq, index) => (
            <div key={index + half} className="relative p-[2px] rounded-xl lg:my-4 mt-0 mb-4">
              <div className="absolute inset-0 bg-gradient-border-transparent rounded-xl p-[2px]"></div>
              <div className="relative bg-[#28262d] hover:bg-[#7d7c81] hover:text-black transition-all rounded-xl p-4">
                <button
                  onClick={() => toggleAccordion(index + half)}
                  className="flex items-center justify-between w-full text-left text-base font-semibold focus:outline-none"
                >
                  {faq.question}
                  <svg
                    className={`transition-transform ${openIndex === index + half ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {openIndex === index + half && (
                  <div className="mt-4 text-sm">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Show More Button for Small Screens */}
      <button
        onClick={() => setShowSecondColumn(!showSecondColumn)}
        className="mt-4 px-4 py-2 text-white rounded-md md:hidden"
      >
        {showSecondColumn ? 'See Less' : 'See More'}
      </button>
    </div>
  );
}
