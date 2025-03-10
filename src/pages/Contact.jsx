import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import ContactFAQ from '../components/ContactFAQ';

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
       <ContactForm />
      <ContactInfo />
    
      <ContactFAQ />
    </div>
  );
}

export default Contact;