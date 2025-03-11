import React, { useState, useEffect, useRef } from 'react';
import { IoClose, IoCheckmarkCircle } from 'react-icons/io5';
import { submitTestimonial } from '../lib/mailchimp';
import FoodIllustration from './FoodIllustration';

function TestimonialModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    story: '',
    image: null
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      
      const { success, error } = await submitTestimonial(formData);
      
      if (!success) throw new Error(error);

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        role: '',
        story: '',
        image: null
      });

      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 2000);

    } catch (err) {
      setError(err.message || 'Failed to submit testimonial. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        setError('Please upload a valid image file (JPEG, PNG, or GIF)');
        return;
      }

      if (file.size > maxSize) {
        setError('Image size must be less than 5MB');
        return;
      }

      setFormData(prev => ({
        ...prev,
        image: file
      }));
      setError('');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-40 p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
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

        {submitted ? (
          <div className="text-center py-8">
            <div className="flex justify-center mb-4 text-accent-3">
              <IoCheckmarkCircle className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p>Your story has been submitted successfully.</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 id="modal-title" className="text-2xl font-bold">Share Your Story</h3>
              <p className="text-sm text-gray-600">Tell us about your experience with Three Sisters Market</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    ref={inputRef}
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="w-full px-4 py-2 border border-border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-3"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="w-full px-4 py-2 border border-border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-3"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 border border-border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-3"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-2">
                  Role or Connection to Three Sisters
                </label>
                <input
                  type="text"
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-4 py-2 border border-border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-3"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="story" className="block text-sm font-medium mb-2">
                  Your Story
                </label>
                <textarea
                  id="story"
                  value={formData.story}
                  onChange={(e) => setFormData(prev => ({ ...prev, story: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-2 border border-border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-3"
                  required
                  disabled={loading}
                ></textarea>
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium mb-2">
                  Profile Picture (Optional)
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 border border-border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-3"
                  disabled={loading}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Max file size: 5MB. Supported formats: JPEG, PNG, GIF
                </p>
              </div>

              {error && (
                <div className="text-red-600 text-sm">
                  {error}
                </div>
              )}

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1"
                  required
                  disabled={loading}
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to share my story and understand it may be featured on the Three Sisters Market website.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-background-alternative text-white py-3 px-6 rounded-lg hover:bg-accent-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Story'}
              </button>
            </form>
          </>
        )}

        <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10">
          <FoodIllustration type="leaf" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialModal;