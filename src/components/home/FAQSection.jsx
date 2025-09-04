import { useState } from 'react';

export default function FAQSection() {
  const faqs = [
    {
      question: "How can Justtawk help grow my business?",
      answer: "JustTawk lets you chat with website visitors in real time, which helps increase leads, boost conversions, and improve customer satisfaction.",
    },
    {
      question: "Will Justtawk improve my customer response time?",
      answer: "Yes, it allows instant replies and automated responses, reducing wait times and keeping customers engaged.",
    },
    {
      question: "Can Justtawk help reduce bounce rates?",
      answer: "Definitely. Live chat encourages visitors to stay longer and interact, lowering bounce rates and increasing engagement.",
    },
    {
      question: "Is Justtawk useful for small businesses?",
      answer: "Absolutely. It's easy to set up, cost-effective, and helps small teams provide pro-level support.",
    },
    {
      question: "Can I track customer interactions with Justtawk?",
      answer: "Yes, the platform offers chat history and visitor insights so you can analyze behavior and improve service.",
    },
    {
      question: "Does Justtawk support team collaboration?",
      answer: "Yes, multiple agents can work together, assign chats, and provide seamless support across your team.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-text">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-dark-text mt-4">
            Find Clear and Detailed Answers to All Your Questions Here
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <span className="text-lg font-medium text-dark-text">{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-dark-text">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
            <p className="text-lg text-dark-text">Have any questions? <a href="/contact-us" className="text-primary font-bold hover:underline">Get In Touch</a></p>
        </div>
      </div>
    </section>
  );
}
