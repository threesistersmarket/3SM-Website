import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';

function ContactFAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is a co-op?",
      answer: "A co-op is a member-owned business that operates for the benefit of its members and community. Members have a say in decisions and share in the profits."
    },
    {
      question: "How do I join?",
      answer: "You can become a member by completing our membership application and making a one-time equity investment. We offer flexible payment plans to make ownership accessible."
    },
    {
      question: "What are the benefits?",
      answer: "Members enjoy discounts, voting rights, profit sharing, and exclusive events. Plus, you'll be part of a community working towards food justice and sustainability."
    },
    {
      question: "Is my investment safe?",
      answer: "Yes, your equity investment is secure and refundable according to our bylaws. We maintain strong financial practices and transparency with our member-owners."
    },
    {
      question: "Can I volunteer?",
      answer: "Absolutely! We have various volunteer opportunities available for both members and non-members. Contact us to learn about current opportunities."
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w md:mb-18 lg:mb-20 text-center">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl ">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your most common questions about our co-op and membership options.
          </p>
        </div>
        <div className="grid items-start justify-stretch gap-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border-primary rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-accent-3/10 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <IoChevronDown 
                  className={`w-6 h-6 text-accent-3 transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  expandedIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="px-6 pb-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20 text-center">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md mb-6">We're here to help!</p>
          <Link
            to="/ownership"
            className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3 hover:bg-accent-3 hover:text-white rounded-lg"
          >
            Learn More About Membership
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactFAQ;