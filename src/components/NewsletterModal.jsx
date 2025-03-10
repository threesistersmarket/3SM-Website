import React, { useState, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { addSubscriber } from '../lib/mailchimp';
import FoodIllustration from './FoodIllustration';

function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const modalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

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
        setTimeout(() => {
          onClose();
        }, 2000);
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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-md bg-white rounded-lg p-8 shadow-xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close dialog"
        >
          <IoClose className="w-6 h-6" />
        </button>

        <div className="absolute -top-10 -left-5 w-32 h-32 opacity-10">
          <FoodIllustration type="sunflower" />
        </div>

        <div className="mb-6">
          <h3 id="modal-title" className="text-2xl font-bold">Stay Connected</h3>
          <p className="text-sm text-gray-600">Get updates on our progress and community events</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              ref={inputRef}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-3"
              disabled={loading}
              required
            />
          </div>

          {message.text && (
            <div className={`text-sm ${
              message.type === 'error' ? 'text-red-600' : 'text-green-600'
            }`}>
              {message.text}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-background-alternative text-white py-3 px-6 rounded-lg hover:bg-accent-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>

          <p className="text-center text-sm text-gray-600">
            Join our growing community of supporters!
          </p>
        </form>

        <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10">
          <FoodIllustration type="leaf" />
        </div>
      </div>
    </div>
  );
}

export default NewsletterModal;