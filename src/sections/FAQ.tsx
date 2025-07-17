import React from 'react';
import FAQSkeleton from '../components/skeletons/FAQSkeleton';

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
  openIndex: number;
  onToggleOpenIndex: (index: number) => void;
}

function AccordionItem({ question, answer, index, openIndex, onToggleOpenIndex }: AccordionItemProps) {
  const open = openIndex === index;
  return (
    <div className="rounded-lg overflow-hidden">
      <button
        className={`w-full text-left bg-gray-100 px-6 py-4 cursor-pointer text-base font-semibold transition flex justify-between items-center ${open ? 'bg-blue-50' : ''}`}
        onClick={() => onToggleOpenIndex(index)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span>{question}</span>
        <svg className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`faq-answer-${index}`}
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{
          maxHeight: open ? '500px' : '0px',
          opacity: open ? 1 : 0,
        }}
      >
        <div className="px-6 py-4 text-gray-600 text-sm whitespace-pre-line">
          {answer}
        </div>
      </div>
    </div>
  );
}

interface FAQSectionProps {
  faqs: { q: string; a: string }[];
  loading: boolean;
  error: string | null;
  openIndex: number;
  onToggleOpenIndex: (index: number) => void;
}

export default function FAQSection({ faqs, loading, error, openIndex, onToggleOpenIndex }: FAQSectionProps) {
  return (
    <section className="bg-white px-6 md:px-35 py-10">
      <div className="mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Electric Car FAQs</h1>

        <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
        New Electric Car models are being presented to the public every day. Almost every car manufacturer now either has one or more electric cars available in their line-up or has them coming soon. Additionally other independent EV manufacturers are also ramping up to become the next TESLA and gain ground in this market.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
        With fuel prices rising, we will be seeing more and more people start thinking about owning an electric car very soon. If you are in the market for an electric car or just considering the switch, we’ve put together the following list of frequently asked questions about electric cars that might help you decide. All you need to know about electric cars in our region is right here on YallaMotor.          <br /><br />
          With fuel prices rising, electric cars are becoming more attractive. Below are frequently asked questions
          to help you decide.
          </p>

        <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
        With fuel prices rising, electric cars are becoming more attractive. Below are frequently asked questions to help you decide.
        </p>
        {loading && (
          <FAQSkeleton />
        )}
        {error && (
          <div className="text-center py-6 text-red-500">{error}</div>
        )}
        {!loading && !error && (
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} question={faq.q} answer={faq.a} index={i} openIndex={openIndex} onToggleOpenIndex={onToggleOpenIndex} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}