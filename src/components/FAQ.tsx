import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How far in advance do I need to book?",
            answer: "Booking is possible as early as 4 hours before departure, depending on aircraft availability and regional regulations. We recommend 24-48 hours for optimal choice."
        },
        {
            question: "What is your safety record?",
            answer: "Safety is our absolute priority. We operate aircraft maintained to the highest industry standards, with professional crews who exceed all global aviation requirements."
        },
        {
            question: "Are there additional fees?",
            answer: "FlyElite offers transparent pricing. Your quote includes the flight, standard catering, and taxes. Any premium services will be discussed in detail before booking."
        },
        {
            question: "Can I choose my aircraft?",
            answer: "Yes, you have full control over the type of jet based on your passenger count and range requirements. Our specialists will guide you through the options."
        }
    ];

    return (
        <section id="faq" className="py-32 bg-white flex items-center justify-center overflow-hidden">
            <div className="max-w-4xl mx-auto px-8 w-full">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-gray-500 tracking-[0.2em] mb-4 uppercase">
                        Your Questions
                    </p>
                    <h2 className="text-4xl md:text-5xl font-normal leading-none tracking-tighter" style={{ color: '#202A36' }}>
                        Curated Support.
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-3xl border border-gray-100 transition-all duration-300"
                            style={{ backgroundColor: openIndex === index ? '#f8f9fa' : 'white' }}
                        >
                            <button
                                className="flex items-center justify-between w-full text-left"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-xl font-medium tracking-tight" style={{ color: '#202A36' }}>{faq.question}</span>
                                {openIndex === index ? <Minus size={24} style={{ color: '#202A36' }} /> : <Plus size={24} style={{ color: '#202A36' }} />}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 max-h-0 ${openIndex === index ? 'max-h-40 mt-4' : ''}`}
                            >
                                <p className="text-gray-600 leading-relaxed text-lg font-light">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
