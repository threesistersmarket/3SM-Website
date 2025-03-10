import React, { useState } from 'react';
import { addSubscriber } from '../lib/mailchimp';

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setMessage({ type: '', text: '' });

      const { success, error } = await addSubscriber(email);

      if (success) {
        setMessage({ type: 'success', text: 'Thank you for subscribing!' });
        setEmail('');
      } else {
        setMessage({ type: 'error', text: error });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ type: 'error', text: 'Failed to subscribe. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-alternative text-white">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Subscribe to our newsletter for updates on our progress and community events.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-3"
            disabled={loading}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-white text-background-alternative rounded-lg hover:bg-accent-3 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message.text && (
          <div className={`mt-4 ${
            message.type === 'error' ? 'text-red-300' : 'text-green-300'
          }`}>
            {message.text}
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsletterSection;