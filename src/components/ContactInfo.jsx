import React from 'react';
import { IoMail, IoLocation } from 'react-icons/io5';

function ContactInfo() {
  const contactInfo = [
    {
      icon: <IoMail className="w-12 h-12" />,
      title: "Email",
      description: "For inquiries, reach out to us anytime at the email below.",
      contact: "info@threesistersmarket.coop",
      link: "mailto:hello@threesistersmarket.com"
    },
    {
      icon: <IoLocation className="w-12 h-12" />,
      title: "Office",
      description: "Visit us at our office for more information and community engagement.",
      contact: "2201 Caronia St, Charlotte, NC 28208",
      link: "https://maps.google.com/?q=2201+Caronia+St+Charlotte+NC+28208"
    },
    {
      icon: <IoMail className="w-12 h-12" />,
      title: "Mailing Address",
      description: "Send us mail at our P.O. Box address.",
      contact: "P.O. Box 669755, Charlotte, NC 28266",
      link: "https://maps.google.com/?q=P.O.+Box+669755+Charlotte+NC+28266"
    }
  ];

  return (
    <section id="contact-info" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex flex-col items-center justify-start text-center">
              <div className="mb-5 lg:mb-6 text-accent-3">
                {info.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                {info.title}
              </h3>
              <p className="mb-5 md:mb-6">{info.description}</p>
              <a href={info.link} className="underline hover:text-accent-3">
                {info.contact}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;